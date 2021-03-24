rh._.exports({"0":["API for data operations"],"1":["\n  ","\n    ","\n    ","Although it is possible for an external application to access billing data directly in the database, PortaBilling® allows you to perform operations such as data retrieval or data modification via API using the following Web Application Services: XML\n      (SOAP) and JSON RPC.","\n    ","This is ideal for applications such as external web portals (where you only need to create a front-end to present the data to the end user) or order entry/provisioning systems (where an application needs to supply the new customer’s data to PortaBilling®\n      in order to activate him).","\n    "," ","\n    ","\n    "," ","\n    ","Performing operations via API has several advantages:","\n    ","\n      ","\n        ","It is based on either XML/SOAP (Simple Object Access Protocol) or JSON (JavaScript Object Notation) Web Application Services and HTTPS transport, so it is accessible from any platform or operating system, and all communication between the server\n          and clients is secure.","\n      ","\n      ","\n        ","The business logic embedded into the API provides integrity checks for all data modifications, and can compile records from several database tables to create a single customer information retrieval structure.","\n      ","\n      ","\n        ","PortaBilling® API is accessible to every owner of a virtual environment or reseller. Each user’s access is automatically limited to his “visible” portion of the available data, e.g. a reseller can only retrieve information about his own sub-customers\n          or their accounts.","\n      ","\n    ","\n    ","PortaBilling® XML/JSON API allows users to perform select, update, insert or delete operations on entities such as customers or accounts. Each user has his own login credentials, and each operation he wishes to perform is analyzed to determine if\n      it is possible with regard to general data integrity (e.g. a new account cannot be created without being assigned to a customer) as well as the particular user’s security permissions (ACLs) (e.g. while it is possible in general to create new accounts,\n      this user may be prohibited from doing so).","\n    ","Details on XML / JSON API (such as available methods and data structures) are described in the ","PortaBilling® XML / JSON API Reference",".","\n    ","\n    ","The ","get_customer_list"," API method allows filtering customer data by using attributes that are relevant to them (e.g. by customer’s home city). However, this might not be sufficient to perform advanced customer and account\n      searches, e.g. to search for US-based customers who have spent over $100 on voice calls in a previous billing period.","\n    ","The ","get_extended_data_list"," API method enables you to do just that. ","You construct the API request and define your own search criteria as input parameters. For example, you can search for customers who live in Toronto and use the EasyCall and SuperCall products.","\n    ","The API method retrieves the desired list and delivers consolidated information about customers to your CRM application. ","Thus, for the example above, it includes information about customers, their accounts and their products.\n      ","This allows you to use PortaBilling® data via your CRM applications to execute marketing campaigns, formulate reports, etc. ","\n    ","T","he ","get_extended_data_list"," method is only available in JSON format. Since you create your own API requests, deeper knowledge of the PortaBilling® API is required.","\n    ","The ","get_extended_data_list"," API method enables you to filter customers and accounts by using the attributes of such entities as:","\n    ","\n      ","\n        ","customers,","\n      ","\n      ","\n        ","accounts,","\n      ","\n      ","\n        ","products (both main ones and add-ons),","\n      ","\n      ","\n        ","customer classes and","\n      ","\n      ","\n        ","invoices.","\n      ","\n    ","\n    ","Upon your request, this method can be expanded to operate using other PortaBilling® entities.","\n    ","Thus, having the ability to perform an advanced data search via the API gives you the following benefits:","\n    ","\n      ","\n        ","The ability to retrieve data from PortaBilling® directly from your CRM or other external apps;","\n      ","\n      ","\n        ","Secure access to the PortaBilling® database; and","\n      ","\n      ","\n        ","Flexibility in forming search queries."," ","\n      ","\n    ","\n  ","\n\n"],"2":["Extended data search via the API"],"3":["API for data operations"],"id":"15"})