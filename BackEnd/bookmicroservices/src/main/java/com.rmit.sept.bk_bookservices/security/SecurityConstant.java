package com.rmit.sept.bk_bookservices.security;

public class SecurityConstant {

    public static final String BOOK_CREATION_URLS = "/api/books/**";
    public static final String REVIEW_CREATION_URLS = "/api/reviews/**";
    public static final String H2_URL = "/h2-console/**";
    public static final String SECRET ="SecretKeyToGenJWTs";
    public static final String TOKEN_PREFIX= "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final long EXPIRATION_TIME = 30_000; //30 seconds
}
