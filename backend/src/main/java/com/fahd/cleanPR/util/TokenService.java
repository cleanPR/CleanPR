package com.fahd.cleanPR.util;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.bouncycastle.asn1.ASN1InputStream;
import org.bouncycastle.asn1.ASN1Sequence;
import org.bouncycastle.asn1.pkcs.PKCSObjectIdentifiers;
import org.bouncycastle.asn1.pkcs.PrivateKeyInfo;
import org.bouncycastle.asn1.x509.AlgorithmIdentifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.security.KeyFactory;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.PKCS8EncodedKeySpec;
import java.util.Base64;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import static com.fahd.cleanPR.CleanPrConstants.GITHUB_REQUEST_BODY_TYPE;

@Service
public class TokenService {

    @Value("${github.appId}")
    String appId;

    @Value("${github.key}")
    String keyPath;

    public String getAccessToken(String url) throws IOException, NoSuchAlgorithmException, InvalidKeySpecException {
        String jwtToken = generateJwt();

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();

        headers.set("Authorization", "Bearer " + jwtToken);
        headers.set("Accept", GITHUB_REQUEST_BODY_TYPE);

        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(
                url,
                HttpMethod.POST,
                entity,
                String.class
        );

        JsonObject jsonObject = JsonParser.parseString(response.getBody()).getAsJsonObject();

        return jsonObject.get("token").getAsString();
    }


    public String generateJwt() throws IOException, NoSuchAlgorithmException, InvalidKeySpecException {
        // reading file
        List<String> keyFileLines = Files.readAllLines(Paths.get(keyPath));

        // removing the lines that are not part of the key
        String key = keyFileLines.stream()
                .filter(line -> !line.contains("BEGIN") && !line.contains("END"))
                .collect(Collectors.joining());

        String newKey = key.replace(" ", "");

        // decoding the key
        byte[] pkcs1Bytes = Base64.getDecoder().decode(newKey);

        // converting pkcs1 to pkcs8 so java can understand it
        byte[] pkcs8bytes = convertPkcs1ToPkcs2(pkcs1Bytes);

        PKCS8EncodedKeySpec spec = new PKCS8EncodedKeySpec(pkcs8bytes);

        // setting the algorithm
        KeyFactory kf = KeyFactory.getInstance("RSA");

        // generating a key with specs and algorithm
        PrivateKey privateKey = kf.generatePrivate(spec);

        Date now = new Date(System.currentTimeMillis());
        return Jwts.builder()
                .setIssuedAt(now)
                .setExpiration(Date.from(now.toInstant().plusSeconds(600)))
                .setIssuer(appId)
                .signWith(privateKey, SignatureAlgorithm.RS256)
                .compact();

    }

    private byte[] convertPkcs1ToPkcs2(byte[] decodedKey) {
        try(ASN1InputStream inputStream = new ASN1InputStream(decodedKey)) {
            ASN1Sequence sequence = (ASN1Sequence) inputStream.readObject();
            AlgorithmIdentifier algId = new AlgorithmIdentifier(PKCSObjectIdentifiers.rsaEncryption);
            PrivateKeyInfo privateKeyInfo = new PrivateKeyInfo(algId, sequence);
            return privateKeyInfo.getEncoded();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
