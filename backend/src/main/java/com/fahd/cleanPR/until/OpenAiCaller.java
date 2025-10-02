package com.fahd.cleanPR.until;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OpenAiCaller {

    private final ChatClient chatClient;

    public OpenAiCaller(ChatClient.Builder chatClient) {
        this.chatClient = chatClient.build();
    }

    /**
     * Generates a pull request summary
     * based on the user changes in the
     * pull request
     * */
    public String generatePullRequestSummary(List<String> codePatches, List<String> prFiles) {
        String systemMessage = summarySystemMessage();

        String userMessage = """
                """;

        // adding code patches to the user prompt
        userMessage += "Code patches:\n \n";
        for(String codePatch : codePatches) {
            userMessage += codePatch;
            userMessage += "\n ";
        }
        userMessage += "\n Pull Request files: ";

        // adding pr files content to the user message
        for(String prFile : prFiles) {
            userMessage += prFile;
            userMessage += "\n ";
        }

        return chatClient.prompt()
                .system(systemMessage)
                .user(userMessage)
                .call()
                .content();
    }


    public String summarySystemMessage() {
        return """
                you are a Senior Software Engineer who reviews pull requests
                
                instruction: 
                    you will be given a pull request code patch and the pull request files.
                    you will look through the code patches and analyze them carefully. 
                    your goal is to generate comprehensive summary that explains
                    what is going on in the pull request (scope = (features, fixes, code enhancements)) 
                    you will mention any code improvements only if there is any.
                    you will mention bugs only if there is any.
                    
                    your response will be as follow
                    
                Your response:
                    you will respond in markdown, no emoji's and the markdown will 
                    look professional like a senior engineer just wrote it.
                """;
    }

}
