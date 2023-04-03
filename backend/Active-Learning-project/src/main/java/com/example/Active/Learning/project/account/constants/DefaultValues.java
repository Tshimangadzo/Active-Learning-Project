package com.example.Active.Learning.project.account.constants;

import com.example.Active.Learning.project.account.models.course.Course;
import com.example.Active.Learning.project.account.models.enums.ERole;

import static com.example.Active.Learning.project.account.models.enums.ERole.ROLE_TRAINEE;

public class DefaultValues {
    public static final String DEFAULT_PAGE_NUMBER = "0";
    public static final String DEFAULT_PAGE_SIZE = "5";
    public static final String DEFAULT_SORT_BY = "id";
    public static final String DEFAULT_SORT_DIRECTION = "ASC";
    public static final Course DEFAULT_COURSE = new Course("WEB DEVELOPMENT");
    public static final ERole DEFAULT_ROLE = ROLE_TRAINEE;

}
