rh._.exports({"0":["Common API entry point for Dual Version PortaSwitch® "],"1":["\n  ","\n  ","Dual Version PortaSwitch® is a solution that enables service providers to perform smooth and controlled customer migration. It also provides extensible API for integration with third-party applications, CRM systems, building self-care portals, etc.\n    Users must be able to log in to the same portal, under the same address regardless of their current location within Dual Version PortaSwitch® in order to preserve their customary habits.","\n  ","Thus, John Doe will log in to ","www.mybilling.com"," to check his balance and invoices, both when his record is on the source system and after it is moved to the target. Administrators\n    and resellers, in turn, must be able to operate in both systems, via the API, without reconfiguring their applications.","\n  ","Please note that administrators/resellers can log into their customer/account self-care interface. If that customer/account is already moved to the target system, PortaBilling® denies automatic login. This is to protect against fraud, since this login\n    request comes from outside the network. To access the customer/account self-care interface, administrators/resellers must click ","Login ","again.","\n  ","To this end, WebDispatcher for Dual Version PortaSwitch® serves as a single API entry point for both the source and the target systems. It accepts API requests from applications (e.g. CRM) and dispatches them across systems for processing.","\n  ","WebDispatcher is one of the components of the DSBC and operates on the same servers where the DSBC is deployed. Like other DSBC components, WebDispatcher is clustered, runs on several servers and is accessible via a single public IP address.","\n  ","That is how WebDispatcher works. The application sends an API request to get customer information. WebDispatcher finds which system a customer is located in and sends a request there. After WebDispatcher receives the results,\n    it returns that customer information to the application.","\n  ","\n  ","Thus, an application can receive data from the source, the target or even both systems. The decision about which data to retrieve is based on the following:","\n  ","\n    ","\n      ","Who uses the application – the administrator/reseller or a retail customer/account, and","\n    ","\n    ","\n      ","The user’s location – if it is within the source or the target system.","\n    ","\n  ","\n  ","Let’s consider how retail customers and administrators/resellers operate in Dual Version PortaSwitch® via the API, separately.","\n  ","\n  ","Customers and accounts can only operate with a system where their records are located. Thus, when a customer logs on to the external self-care portal, the application sends the API request to WebDispatcher. It checks the customer’s location within Dual\n    Version PortaSwitch® and if the customer was moved to the target system, WebDispatcher sends the API request to that system.","\n  ","Then, when the customer performs an action (e.g. selects xDRs for the previous billing period), WebDispatcher proxies the API request to the respective system (e.g. the target system). The target system then retrieves the xDRs and WebDispatcher delivers\n    them to the application.","\n  ","If a customer in the source system uses the external self-care portal, WebDispatcher receives the API requests and sends them to the source system for processing.","\n  ","\n  ","Administrators, resellers and their staff (representatives, customer care staff, etc.) manage their own configurations plus those of customers who exist in both systems within Dual Version PortaSwitch®. Therefore, depending upon customer location, their\n    applications must be able to send the proper context, i.e. which system will process their requests.","\n  ","WebDispatcher automatically detects the context based on the i_customer/i_account values passed in the input parameters within API requests. For this purpose, customer and account records in Dual Version PortaSwitch® have unique IDs. When you move customer\n    data from one system to another, IDs are preserved. Later on, customers created on the source system receive odd ID values while customers created on the target system receive even ID values. This prevents data collision during customer migration\n    from one system to another.","\n  ","Some API applications use both the IDs of customers/accounts and the IDs of entities such as products, volume discount plans, etc. as static values in API requests. For example, to obtain information about a customer’s volume discount plan usage, the\n    application sends ","i_customer ","and"," i_vd_plan ","values in the input parameters.","\n  ","To preserve the workflow for these applications in Dual Version PortaSwitch®, IDs for all configuration entities are preserved when moved between systems. Thus, your ABC product has the same ID (e.g. i_product=123) on both systems. As a result, fewer\n    customizations are required to make the API application compatible with Dual Version PortaSwitch®.","\n  ","Differently from customers and accounts, these entities remain available in the source system, even when moved to the target one. Therefore, the administrator must remember to modify them in both systems in order to prevent differences in configuration.","\n  ","Once an administrator has configured the interconnection between systems, the workflow is typically the following:","\n  ","\n    ","\n      ","The application connects to WebDispatcher via the API and receives the session ID.","\n    ","\n    ","\n      ","If the application sends the API request to retrieve the customer list, WebDispatcher runs the request in both systems and then merges the results into a single list. Thus, the administrator or reseller sees those customers who are still within\n        the source system, those who were moved to the target system and those who were created in the target system.","\n    ","\n    ","\n      ","To manage a customer in Dual Version PortaSwitch®, the application sends the ID of this customer’s record in an API request. WebDispatcher sends the request to the system, where this customer is provisioned. After the results are received, the data\n        is delivered to the application.","\n    ","\n    ","\n      ","Entities such as products, bundle promotions, volume discount plans, etc. can exist independently, i.e. not be tied to a particular customer directly. Therefore, to retrieve the list of subscriptions from the target system, the application sets\n        the session context by providing the unique ID for the target system’s billing environment within the API request. Then WebDispatcher runs further requests in the target system.","\n    ","\n    ","\n      ","To operate with subscriptions from the source system, the application switches the session context by providing the ID of the billing environment in the source system. In this case, all subsequent requests are processed by the source system.","\n    ","\n    ","\n      ","To modify a customer class with the same ID in both systems in Dual Version PortaSwitch® the application must first set the session context to the source system and update the customer class there. Then the application switches the session context\n        to the target system and updates the customer class there. We recommend this approach to avoid creating differences in entity configuration.","\n    ","\n  ","\n  ","CPE profile provisioning is supported for Dual Version PortaSwitch®. So when an IP phone connects to the Internet and requests a configuration file from WebDispatcher, WebDispatcher processes the request and retrieves the file from the target system\n    and then delivers it to the IP phone.","\n  ","The obsolete TFTP protocol is no longer supported, therefore the HTTP protocol is supported for CPE profile provisioning in Dual Version PortaSwitch®.","\n  ","WebDispatcher for Dual Version PortaSwitch® provides a single place for customer management and system operation. This makes the migration process more fluid. The full application preserves user habits and thus improves the overall PortaSwitch® customer\n    experience.","\n  ","\n  ","When operating with Dual Version PortaSwitch® via the API, consider the following implementation specifics:","\n  ","\n    ","\n      ","Applications can operate with PortaSwitch® only via the REST and SOAP API. The WebSocket API is not supported.","\n    ","\n    ","\n      ","To establish a session with the target system, credentials for the API access must be the same for both systems.","\n    ","\n    ","\n      ","After login, the application will be provided with the session ID that must be used in all subsequent API requests.","\n    ","\n    ","\n      ","All communication between the application and PortaSwitch® is done via WebDispatcher.","\n    ","\n    ","\n      ","The common API entry point operates in conjunction with the dispatching SBC and Diameter proxy.","\n    ","\n    ","\n      ","Only the get_customer_list method provides results from both systems. If you have defined limits for the list (the number of rows to retrieve), expect results that are twice as long because the same limit value will be used when querying both the\n        source and the target system.","\n    ","\n  ","\n  ","\n  ","\n  ","\n  ","Bear in mind the following known limitations:","\n  ","\n    ","\n      ","For security measures, add the WebDispatcher IP address to the allowed IP addresses for each entity (user, customer, reseller) on the PortaBilling® web interface.","\n    ","\n    ","\n      ","The systems are mapped with each other by their environment IDs. Therefore, be careful when switching the environment since this may result in broken mapping and session disconnect with the target system.","\n    ","\n    ","\n      ","If the target system fails to establish the API session with the source system, it operates as if there is no source system.","\n    ","\n  ","\n  ","\n  ","\n  ","\n  ","The set of dispatchers in Dual Version PortaSwitch® distribute calls, registrations, API, number porting, CPE, RADIUS and Diameter requests thus ensuring customers in either system keep using the services as if nothing has happened.","\n  ","However, some services have limitations in scope of Dual Version PortaSwitch® and require additional actions from the administrator. These services are:","\n  ","\n    ","\n      ","Mail services",". ","If a user works with their mailbox via an external mail client, this client will not work properly after the user is migrated to the target system as it will keep sending the IMAP/SMTP requests to\n        the source system’s address. The Mail proxy component operates only with local requests and does not support IMAP/SMTP request distribution across systems. Thus, it is required to reconfigure the mail clients to send IMAP/SMTP requests to the\n        URL of the target system.","\n    ","\n    ","\n      ","SMSdelivery via SMPP.","Like mail proxy, the SMPP proxy operates locally, i.e. it processes SMPP requests in the system it is configured in. The SMPP proxy does not support the SMPP request dispatching across systems in Dual Version\n        PortaSwitch®. Therefore, agree with your SMS providers to establish TCP connections with both source and target systems to handle SMPP traffic from them.","\n    ","\n    ","\n      ","Access to webmail and PortaSIP® API."," Migrated customers can access their web mailboxes from their account self-care portal by clicking the Voicemail Inbox button. The direct access (i.e. by entering the web server’s URL in the browser)\n        is not available until customers are provided with the IP address / domain name of the target system. Similarly, to access PortaSIP® API (e.g. to configure the auto-attendant), their API applications must be adjusted to send requests to the IP\n        address / domain name of the target system. This is because these API requests are processed by a separate SOAP server which does not support request distribution.","\n    ","\n    ","\n      ","Callback services."," Web and email callback services require reconfiguration to become available for migrated customers. Namely, provide customers with the email address and web page address to initiate email/web callback in the target\n        system.","\n    ","\n    ","\n      ","Call control API. ","For customers to receive to real-time call state notifications, a WebSocket connection must be established and the API applications must subscribe to notifications via this connection. WebSocket API is not supported\n        in Dual Version PortaSwitch®. Thus, though your customers can still use XML (SOAP) and REST (JSON) API for call control API methods, they will not receive call state notifications.","\n    ","\n    ","\n      ","IVR applications. ","IVR applications with access numbers defined as DIDs are available only if all customers using them reside in the same system. Thus, to preserve the service flow you must migrate all of them and the access number\n        at once.","\n    ","\n  ","\n  "," ","\n  ","\n  ","\n\n"],"2":["Common API entry point for Dual Version PortaSwitch®"],"3":["API for retail customers/accounts","API for administrators and resellers","Implementation specifics"],"4":["Limitations in Dual Version PortaSwitch®"],"6":["Known limitations"],"id":"29"})