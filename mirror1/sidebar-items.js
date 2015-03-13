initSidebarItems({"enum":[["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an [authorization token](https://developers.google.com/youtube/v3/guides/authentication)."]],"macro":[["map!","This macro is advertised in the documentation, which is why we deliver it as well"]],"mod":[["cmn",""]],"struct":[["Account","Represents an account passed into the Account Manager on Glass.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [insert](struct.AccountInsertMethodBuilder.html) (request|response)    "],["AccountInsertMethodBuilder","Inserts a new account for a user"],["AccountMethodsBuilder","A builder providing access to all methods supported on *account* resources. It is not used directly, but through the `Mirror` hub."],["Attachment","Represents media content, such as a photo, that can be attached to a timeline item.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [attachments.insert](struct.TimelineAttachmentInsertMethodBuilder.html) (response) * [attachments.get](struct.TimelineAttachmentGetMethodBuilder.html) (response)    "],["AttachmentsListResponse","A list of Attachments. This is the response from the server to GET requests on the attachments collection.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [attachments.list](struct.TimelineAttachmentListMethodBuilder.html) (response)    "],["AuthToken","There is no detailed description.   This type is not used in any activity, and only used as *part* of another schema.  "],["Command","A single menu command that is part of a Contact.   This type is not used in any activity, and only used as *part* of another schema.  "],["Contact","A person or group that can be used as a creator or a contact.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [insert](struct.ContactInsertMethodBuilder.html) (request|response) * [delete](struct.ContactDeleteMethodBuilder.html) (none) * [list](struct.ContactListMethodBuilder.html) (none) * [update](struct.ContactUpdateMethodBuilder.html) (request|response) * [patch](struct.ContactPatchMethodBuilder.html) (request|response) * [get](struct.ContactGetMethodBuilder.html) (response)    "],["ContactDeleteMethodBuilder","Deletes a contact."],["ContactGetMethodBuilder","Gets a single contact by ID."],["ContactInsertMethodBuilder","Inserts a new contact."],["ContactListMethodBuilder","Retrieves a list of contacts for the authenticated user."],["ContactMethodsBuilder","A builder providing access to all methods supported on *contact* resources. It is not used directly, but through the `Mirror` hub."],["ContactPatchMethodBuilder","Updates a contact in place. This method supports patch semantics."],["ContactUpdateMethodBuilder","Updates a contact in place."],["ContactsListResponse","A list of Contacts representing contacts. This is the response from the server to GET requests on the contacts collection.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [list](struct.ContactListMethodBuilder.html) (response)    "],["Location","A geographic location that can be associated with a timeline item.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [get](struct.LocationGetMethodBuilder.html) (response) * [list](struct.LocationListMethodBuilder.html) (none)    "],["LocationGetMethodBuilder","Gets a single location by ID."],["LocationListMethodBuilder","Retrieves a list of locations for the user."],["LocationMethodsBuilder","A builder providing access to all methods supported on *location* resources. It is not used directly, but through the `Mirror` hub."],["LocationsListResponse","A list of Locations. This is the response from the server to GET requests on the locations collection.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [list](struct.LocationListMethodBuilder.html) (response)    "],["MenuItem","A custom menu item that can be presented to the user by a timeline item.   This type is not used in any activity, and only used as *part* of another schema.  "],["MenuValue","A single value that is part of a MenuItem.   This type is not used in any activity, and only used as *part* of another schema.  "],["Mirror","Central instance to access all Mirror related resource activities"],["Notification","A notification delivered by the API.   This type is not used in any activity, and only used as *part* of another schema.  "],["NotificationConfig","Controls how notifications for a timeline item are presented to the user.   This type is not used in any activity, and only used as *part* of another schema.  "],["Setting","A setting for Glass.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [get](struct.SettingGetMethodBuilder.html) (response)    "],["SettingGetMethodBuilder","Gets a single setting by ID."],["SettingMethodsBuilder","A builder providing access to all methods supported on *setting* resources. It is not used directly, but through the `Mirror` hub."],["Subscription","A subscription to events on a collection.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [insert](struct.SubscriptionInsertMethodBuilder.html) (request|response) * [delete](struct.SubscriptionDeleteMethodBuilder.html) (none) * [list](struct.SubscriptionListMethodBuilder.html) (none) * [update](struct.SubscriptionUpdateMethodBuilder.html) (request|response)    "],["SubscriptionDeleteMethodBuilder","Deletes a subscription."],["SubscriptionInsertMethodBuilder","Creates a new subscription."],["SubscriptionListMethodBuilder","Retrieves a list of subscriptions for the authenticated user and service."],["SubscriptionMethodsBuilder","A builder providing access to all methods supported on *subscription* resources. It is not used directly, but through the `Mirror` hub."],["SubscriptionUpdateMethodBuilder","Updates an existing subscription in place."],["SubscriptionsListResponse","A list of Subscriptions. This is the response from the server to GET requests on the subscription collection.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [list](struct.SubscriptionListMethodBuilder.html) (response)    "],["TimelineAttachmentDeleteMethodBuilder","Deletes an attachment from a timeline item."],["TimelineAttachmentGetMethodBuilder","Retrieves an attachment on a timeline item by item ID and attachment ID."],["TimelineAttachmentInsertMethodBuilder","Adds a new attachment to a timeline item."],["TimelineAttachmentListMethodBuilder","Returns a list of attachments for a timeline item."],["TimelineDeleteMethodBuilder","Deletes a timeline item."],["TimelineGetMethodBuilder","Gets a single timeline item by ID."],["TimelineInsertMethodBuilder","Inserts a new item into the timeline."],["TimelineItem","Each item in the user's timeline is represented as a TimelineItem JSON structure, described below.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [patch](struct.TimelinePatchMethodBuilder.html) (request|response) * [insert](struct.TimelineInsertMethodBuilder.html) (request|response) * [get](struct.TimelineGetMethodBuilder.html) (response) * [update](struct.TimelineUpdateMethodBuilder.html) (request|response)    "],["TimelineListMethodBuilder","Retrieves a list of timeline items for the authenticated user."],["TimelineListResponse","A list of timeline items. This is the response from the server to GET requests on the timeline collection.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [list](struct.TimelineListMethodBuilder.html) (response)    "],["TimelineMethodsBuilder","A builder providing access to all methods supported on *timeline* resources. It is not used directly, but through the `Mirror` hub."],["TimelinePatchMethodBuilder","Updates a timeline item in place. This method supports patch semantics."],["TimelineUpdateMethodBuilder","Updates a timeline item in place."],["UserAction","Represents an action taken by the user that triggered a notification.   This type is not used in any activity, and only used as *part* of another schema.  "],["UserData","There is no detailed description.   This type is not used in any activity, and only used as *part* of another schema.  "]]});