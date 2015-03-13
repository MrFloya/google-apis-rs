initSidebarItems({"enum":[["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an [authorization token](https://developers.google.com/youtube/v3/guides/authentication)."]],"macro":[["map!","This macro is advertised in the documentation, which is why we deliver it as well"]],"mod":[["cmn",""]],"struct":[["BatchReport","Contains single batchReport resource.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [list](struct.BatchReportListMethodBuilder.html) (none)    "],["BatchReportDefinition","Contains single batchReportDefinition resource.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [list](struct.BatchReportDefinitionListMethodBuilder.html) (none)    "],["BatchReportDefinitionList","A paginated list of batchReportDefinition resources returned in response to a youtubeAnalytics.batchReportDefinitions.list request.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [list](struct.BatchReportDefinitionListMethodBuilder.html) (response)    "],["BatchReportDefinitionListMethodBuilder","Retrieves a list of available batch report definitions."],["BatchReportDefinitionMethodsBuilder","A builder providing access to all methods supported on *batchReportDefinition* resources. It is not used directly, but through the `YouTubeAnalytics` hub."],["BatchReportList","A paginated list of batchReport resources returned in response to a youtubeAnalytics.batchReport.list request.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [list](struct.BatchReportListMethodBuilder.html) (response)    "],["BatchReportListMethodBuilder","Retrieves a list of processed batch reports."],["BatchReportMethodsBuilder","A builder providing access to all methods supported on *batchReport* resources. It is not used directly, but through the `YouTubeAnalytics` hub."],["BatchReportOutputs","Report outputs.   This type is not used in any activity, and only used as *part* of another schema.  "],["BatchReportTimeSpan","Period included in the report. For reports containing all entities endTime is not set. Both startTime and endTime are inclusive.   This type is not used in any activity, and only used as *part* of another schema.  "],["Group","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [list](struct.GroupListMethodBuilder.html) (none) * [update](struct.GroupUpdateMethodBuilder.html) (request|response) * [insert](struct.GroupInsertMethodBuilder.html) (request|response) * [delete](struct.GroupDeleteMethodBuilder.html) (none)    "],["GroupContentDetails","There is no detailed description.   This type is not used in any activity, and only used as *part* of another schema.  "],["GroupDeleteMethodBuilder","Deletes a group."],["GroupInsertMethodBuilder","Creates a group."],["GroupItem","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [list](struct.GroupItemListMethodBuilder.html) (none) * [delete](struct.GroupItemDeleteMethodBuilder.html) (none) * [insert](struct.GroupItemInsertMethodBuilder.html) (request|response)    "],["GroupItemDeleteMethodBuilder","Removes an item from a group."],["GroupItemInsertMethodBuilder","Creates a group item."],["GroupItemListMethodBuilder","Returns a collection of group items that match the API request parameters."],["GroupItemListResponse","A paginated list of grouList resources returned in response to a youtubeAnalytics.groupApi.list request.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [list](struct.GroupItemListMethodBuilder.html) (response)    "],["GroupItemMethodsBuilder","A builder providing access to all methods supported on *groupItem* resources. It is not used directly, but through the `YouTubeAnalytics` hub."],["GroupItemResource","There is no detailed description.   This type is not used in any activity, and only used as *part* of another schema.  "],["GroupListMethodBuilder","Returns a collection of groups that match the API request parameters. For example, you can retrieve all groups that the authenticated user owns, or you can retrieve one or more groups by their unique IDs."],["GroupListResponse","A paginated list of grouList resources returned in response to a youtubeAnalytics.groupApi.list request.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [list](struct.GroupListMethodBuilder.html) (response)    "],["GroupMethodsBuilder","A builder providing access to all methods supported on *group* resources. It is not used directly, but through the `YouTubeAnalytics` hub."],["GroupSnippet","There is no detailed description.   This type is not used in any activity, and only used as *part* of another schema.  "],["GroupUpdateMethodBuilder","Modifies a group. For example, you could change a group's title."],["ReportMethodsBuilder","A builder providing access to all methods supported on *report* resources. It is not used directly, but through the `YouTubeAnalytics` hub."],["ReportQueryMethodBuilder","Retrieve your YouTube Analytics reports."],["ResultTable","Contains a single result table. The table is returned as an array of rows that contain the values for the cells of the table. Depending on the metric or dimension, the cell can contain a string (video ID, country code) or a number (number of views or number of likes).   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [query](struct.ReportQueryMethodBuilder.html) (response)    "],["ResultTableColumnHeaders","This value specifies information about the data returned in the rows fields. Each item in the columnHeaders list identifies a field returned in the rows value, which contains a list of comma-delimited data. The columnHeaders list will begin with the dimensions specified in the API request, which will be followed by the metrics specified in the API request. The order of both dimensions and metrics will match the ordering in the API request. For example, if the API request contains the parameters dimensions=ageGroup,gender&metrics=viewerPercentage, the API response will return columns in this order: ageGroup,gender,viewerPercentage.   This type is not used in any activity, and only used as *part* of another schema.  "],["YouTubeAnalytics","Central instance to access all YouTubeAnalytics related resource activities"]]});