package com.fahd.cleanPR.handler;


import lombok.extern.java.Log;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Map;

public abstract class BaseEventHandler {

    private final Logger logger =  LoggerFactory.getLogger(getClass());

    public abstract void triggerEvent(Map<String, Object> webPayload, String action);

    public void logInfo(String message) {
        logger.info(message);
    }

    public void logSuccess(String message) {
        logger.info(message);
    }

    public void logError(String message) {
        logger.info(message);
    }
}
