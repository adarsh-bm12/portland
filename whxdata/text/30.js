rh._.exports({"0":["Frequently asked questions"],"1":["\n  ","\n  ","\n  ","ZDU allows to update the whole system to the new software version in a single step. Dual Version PortaSwitch® solution implies the following:","\n  ","\n    ","\n      ","Simultaneous operation of two independent systems in different software versions linked with each other.","\n    ","\n    ","\n      ","Consistent migration of customers from a system with a lower software version to a higher version system.","\n    ","\n  ","\n  ","Using the Dual Version PortaSwitch® solution, you can gradually migrate customers from older releases to a newer release in 2-3 months (exact time depends on the database size).","\n  ","The maximal update “jump” span for ZDU is 5 releases because the nearest LTS cannot be crossed in such a “jump.” Maximal “jumps” using Dual Version PortaSwitch® solution are much wider but require obligatory checkpoints every 15 releases (i.e., MR55→MR70\n    or MR70→MR85).","\n  ","\n  ","The target and source systems of the Dual Version solution operate independently and do not involve redundancy as part of the design. If a data center outage occurs for either the source or target system during a long migration, it’s going to be visible.\n    So the Dual Version solution does not provide redundancy by itself, but instead works in conjunction with the current geo-redundancy and ZDU functionality available in PortaSwitch®.","\n  ","Since Dual Version PortaSwitch® involves two systems running in parallel, the source and target systems can be used for geo-redundancy to ensure uninterrupted service provisioning for every system in Dual Version PortaSwitch®.","\n  ","In most cases, the redundancy can be achieved in two ways: by deploying billing, SIP, and database clusters, or by dispersing the systems across multiple sites. The latter solution provides high-availability and geo-redundancy options.","\n  ","\n  ","Yes, you always need to have a separate DSBC for Dual Version PortaSwitch®. Even if you have a fairly new PortaSIP®, it’s still a part of your source system and is only aware of that specific system. If you want to move, for instance, from MR70 to MR85,\n    you need a DSBC in front of your PortaSIP®. DSBC decides whether to route calls to the PortaSIP® cluster on the source system or the target system.","\n  ","The DSBC links systems in Dual Version PortaSwitch® and is required for delivering calls across systems. It “knows” where the account record is located and delivers the call accordingly. You can configure DSBC on a real or virtual server or in the PortaOne\n    Cloud.","\n  ","\n  ","No. The DSBC only participates in the signaling path of the call by distributing incoming call initiation requests across systems for processing. When a call is established, endpoints exchange media streams directly (except for calls with RTPProxy,\n    where the media stream goes through SIP Cluster without involving the DSBC), or it can take place via the RTPProxies of their respective PortaSIP® clusters.","\n  ","\n  ","You have the choice to either:","\n  ","\n    ","\n      ","Use dedicated hardware (on-premise or virtual).","\n    ","\n    ","\n      ","Launch the target system fully in the PortaOne Cloud.","\n    ","\n    ","\n      ","Use the PortaOne Cloud for the DSBC and the dedicated hardware (on-premise or virtual) for the rest of the target system.","\n    ","\n  ","\n  ","The cloud can be a temporary migration tool, or you can use this as an opportunity to liberate your operations from the physical data center permanently. At PortaOne, we consider the cloud to be the way to move forward and future-proof your operations.\n    However, to limit latency, we recommend deploying the DSBC (by default, deployed on the target system) as geographically close to the source system as possible.","\n  ","\n  ","All dispatcher nodes need to be deployed within the context of the target system installation and configured by the target system’s Configurator.","\n  ","\n  ","An extra system requires extra licensing. The licensing depends on how you wish to deploy the target system. You can purchase a regular perpetual license and use it for your target system in the Dual Version PortaSwitch® solution or as a separate system\n    to ensure redundancy – that’s up to you. In the case of PortaOne cloud deployment, you benefit from the monthly fee calculated according to the number of your billable xDRs processed per month.","\n  ","If you’re only interested in extending the system for a one-time migration, we can come up with an exclusive license to cover this situation. For detailed information about pricing, ","contact the PortaOne Sales","    team.","\n  ","\n  ","No. The Dual Version PortaSwitch® solution is only available starting from MR55-6. If your current release is lower than MR55-6, you need to update to MR55-6 first. Contact PortaOne Support to schedule the update procedure.","\n  ","\n  ","Currently, the “long jump” options are available for MR55-6 to MR70-6 and MR70-6 to MR85-3.","\n  ","For detailed information about the transfer capabilities available for your current release and build, as well as for assistance in performing the transfer, contact PortaOne Support.","\n  ","\n  ","Yes, to a certain degree, by using the “dry-run” mode of the Porter utility. In this mode, Porter emulates (there will be no new records in the database on the target system) exporting all data related to the customer and applies transformation logic\n    for this data. Therefore, with the help of Porter, you can check the configuration of the target system before running the migration process.","\n  ","\n  ","Yes. A customer can experience downtime ranging from several seconds to several minutes (for a customer with more than 100 accounts) while being migrated.","\n  ","The migration of ","customer data"," related to the current configuration creates some downtime, but the migration of customer’s history of service usage (xDRs, volume discount counter history, call recordings, etc.) causes no\n    downtime."," ","During the customer data migration, services (LTE, SIP, xDR mediation, etc.) are affected by the downtime as the customer data might already be deleted from the source system, but not yet created on the target system.","\n  ","Customer migration time strictly depends on the amount of data being migrated – for instance, the number of accounts a customer owns: it takes less time to migrate a residential customer with a basic SIP calling service than an IP Centrex customer with\n    dozens of accounts.","\n  ","\n  ","You can batch migrate any number of customers at a time. The number of customers in a batch is arbitrary. And the time it takes to migrate the batch depends on the number of accounts per customer and the overall capacity of the given Dual Version PortaSwitch®\n    installation. For example (based on real customer data, approximated):]","\n  ","\n    ","\n      ","\n        ","\n          ","\n            ","Customers","\n          ","\n          ","\n            ","Accounts","\n          ","\n          ","\n            ","VDCH discount history records","\n          ","\n          ","\n            ","NAUD Internet session records","\n          ","\n          ","\n            ","CDR_Accounts/CDR_Accounts Failed","\n          ","\n          ","\n            ","Migration time (seconds)","\n          ","\n        ","\n        ","\n          ","\n            ","1","\n          ","\n          ","\n            ","5","\n          ","\n          ","\n            ","15","\n          ","\n          ","\n            ","330","\n          ","\n          ","\n            ","255","\n          ","\n          ","\n            ","8","\n          ","\n        ","\n        ","\n          ","\n            ","1","\n          ","\n          ","\n            ","19","\n          ","\n          ","\n            ","236","\n          ","\n          ","\n            ","0","\n          ","\n          ","\n            ","1375","\n          ","\n          ","\n            ","105","\n          ","\n        ","\n      ","\n    ","\n  ","\n  ","Several parallel threads deal with entities in the batch to provide maximally fast customer migration thanks to the new smart Porter utility.","\n  ","Each thread processes its customer and starts transferring the data belonging to that customer. In this process, threads also branch into parallel “workers” that work in a single customer's context, reducing the overall migration downtime.","\n  ","For example, if the customer has 4 accounts and 4 workers, then each can take one account and start transferring its data to the target system. Threads allow you to port several customers at once, thus making better use of the hardware. These parameters\n    are selected automatically (and not by an administrator). You can try and pre-define them, but the automatic way is recommended.","\n  ","\n  ","Yes. Partial migration allows you to migrate just a small batch, see how it behaves, test, and do a rollback in case of errors or UX problems. In this case, the reseller is not marked as Exported and thus exists in both systems. This implies reseller\n    management in both systems.","\n  ","\n  ","On the source system, you can add new customers during data migration, but you cannot add new products. On the target system, you can operate independently from the source system and create new products and service bundles, evaluate new features, etc.","\n  ","\n  ","No. The vendor configuration is duplicated in Dual Version PortaSwitch®. This means that the same vendor is active in both systems and their balance is split between the systems.","\n  ","\n  ","The same vendor is active in both systems, so the balance is split between the source and target systems. The vendor’s balance is affected by the calls and services terminated on this vendor on each system. So, while the customers use the services on\n    different systems, the vendor’s balance on the target and source system will not match.","\n  ","For example, if the vendor’s balance on the source system is $2000, initially it will also be displayed as $2000 for the target system. However, as some customers are migrated to the target system and some stay on the source system, the balance for\n    the services used will be displayed differently on different systems: $2000 + the price of the services used on the source system and $2000 + the price of the services used on the target system. This means that until all customers are fully migrated\n    to the target system, the vendor’s balance on source and target systems will be different.","\n  ","\n  ","No. Product data is dictionary data, which must be in sync on both the source and target system at all times. ","\n  ","If a product is modified on the source system, the service behavior of an account will change after migration to the target system, leading to undesirable results because the system doesn’t expect such behavior. If a new product is created on the source\n    system and then assigned to some account, the migration of the customer with such an account will fail.","\n  ","Everything that can be changed even before customer creation is dictionary data and should always be synchronized on both source and target systems. Remember, you can create or change Products even before creating a customer.","\n  ","\n  ","Yes. The set of products assigned to accounts is customer data and it and can be safely changed at any time. Any configuration of products created before switching to Dual Version PortaSwitch® can be used.","\n  ","\n  ","The minimum requirements are:","\n  ","\n    ","\n      ","1 IP address for Web Dispatcher*","\n    ","\n    ","\n      ","1 IP address for RADIUS/Diameter Dispatcher","\n    ","\n    ","\n      ","1 IP address for each SIP Cluster on the source system","\n    ","\n  ","\n  ","* Web Dispatcher and the RADIUS/Diameter Dispatcher could technically share the same IP in the context of DSBC, but that would bring inconveniences to customers. For example, if they currently direct the RADIUS/Diameter traffic to ","IP address 1","    and the Web traffic to ","IP address 2",", you can deploy the DSBC where the Web Dispatcher and the RADIUS/Diameter Dispatcher nodes are both using ","IP address 3",". In this case, all the customers need to reconfigure their\n    settings and re-route both their RADIUS/Diameter and Web traffic to ","IP address 3",".","\n  ","Or you can dispatch the DSBC using ","IP address 1"," for the RADIUS/Diameter traffic and ","IP address 2"," for the Web traffic (consequently, you will need to allocate new IP addresses for these nodes on the source systems and\n    later on the target systems) and the customers won’t even notice that anything has changed in the system, as the DSCB will route the traffic incoming to ","IP address 1"," and ","IP address 2"," to the corresponding new IP addresses\n    on the source and on the target systems.","\n  ","\n  ","This depends on many factors. The isolated technical procedure of deployment consists of running just a few commands because in the new Dual Version PortaSwitch®, everything is maximally automated. In the testing lab, the full preparation process only\n    takes a few days. However, in a real-world setting, the whole preliminary testing stage combined with the business analysis stage might take a long time (up to several weeks).","\n  ","\n  ","Migration with the help of the Dual Version solution can be a very swift process, but we’re striving to strike the balance between your comfort and speed. You can take as long as you need for a gradual controlled migration/update. However, the minimum\n    time it can take to migrate everything with all xDRs, even for the largest client data sets, is around 2 months.","\n  ","\n  ","It depends on the data type. The Porter utility moves all customer data (subordinate customer configuration data that belongs to a specific customer and can only be created after that customer is created, for example, accounts, xDRs, voicemails), but\n    doesn’t migrate the dictionary data (the data that initially exists on the source system, independent from customer creation – for example, products, templates, customer class) as it’s assumed that it won’t be changing.","\n  ","\n  ","Voicemails are a part of customer data. They are automatically migrated by the Porter utility during the customer migration process.","\n  ","\n  ","Dispatching of the calls to IVR numbers during migration with the help of Dual Version PortaSwitch® is supported for the IVR numbers that have corresponding DID numbers assigned to them. The DSBC routes the incoming calls to such IVRs to the appropriate\n    system (source or target).","\n  ","However, in some cases, IVR numbers are used without a DID number assigned to them. For such IVR numbers, during the migration, the DSBC won’t “know,” to which system to address the calls. To prevent this, such IVR numbers need to be migrated together\n    with the product, customers, and accounts that use these IVR numbers.","\n  ","\n  ","The same logic as for other\n    ","services that take place during the migration process of the customer applies here. Customer migration time is a downtime period for services. The import of xRDs for the customer in migration will fail, but the failed xDRs can be selected and set\n    for reprocessing.","\n\n"],"3":["Frequently asked questions"],"4":["What is the difference between Zero-downtime update (ZDU) and Dual Version PortaSwitch®?","Does the Dual Version architecture provide redundancy?","Do I need to deploy a dispatching SBC (DSBC) if I already have the PortaSIP® cluster?","Does the DSBC participate in media streaming?","Where can I deploy the target system?","Where do I need to install the dispatcher node: target or source system?","What are the licensing terms for using Dual Version PortaSwitch®?","Can I launch Dual Version PortaSwitch® if my current release is lower than MR50?","Which releases are available for “long jump” via Dual Version PortaSwitch®?","Can I run a pre-test to ensure that my customers are migrated successfully before I start the migration process?","Is there any downtime when a customer is moved between systems?","How many customers can I batch migrate at a time?","Can I migrate just a part of the reseller customers?","Can I add new customers, products, etc. to the systems during data migration?","Will vendors be marked Exported after migration to the target system?","What happens to the vendor’s balance on the source and target systems?","Can I modify a product that is only used by accounts on the source system in Dual Version PortaSwitch®?","Can I change the product configuration of accounts on the source system in Dual Version PortaSwitch®?","How many public IPs do I need to deploy a DSBC for Dual Version PortaSwitch®?","How much time does it take to prepare everything for the migration (time to deploy, configure,\n    prepare the source and target systems for the migration)?","What about the performance figures: how much time does it take to migrate my database?","I have custom reports, templates, music on hold files, and a few other data types. Will\n    it be automatically migrated, or will it take some manual work?","How do I migrate voicemails in Dual Version PortaSwitch®?","How do IVR numbers work in Dual Version PortaSwitch®?","What happens with the xDR import process during the customer's migration in Dual Version PortaSwitch®?"],"id":"30"})