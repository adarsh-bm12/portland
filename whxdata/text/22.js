rh._.exports({"0":["PortaOne iPaaS"],"1":["\n  ","\n    ","\n    ","PortaOne iPaaS (Integration Platform as a Service) is a provisioning solution that enables you to deploy new functionalities (e.g. provision new CPE profiles or add new payment processors) through containers that run in the cloud. This eliminates\n      the need to update all of PortaSwitch® to the newest release. Thus, you reduce the time to market for new services.","\n    ","A container is a portable software unit where all the components of new functionality (code, runtime, system tools, system libraries and settings) are stored as one package. Containers are deployed in the cloud-based PortaOne iPaaS independently from\n      the PortaSwitch® installation. As a result they are easily modified and extended.","\n    ","\n    ","To start using new features via the PortaOne iPaaS, subscribe to it. To find out about our subscription terms, contact our ","Sales department",".","\n    ","\n    ","Service provisioning via PortaOne iPaaS:","\n    ","\n      ","\n        ","Significantly saves your time and resources since you do not need to update your installation to receive a new functionality.","\n      ","\n      ","\n        ","Reduces time to market for new functionalities, making you more competitive.","\n      ","\n      ","\n        ","Improves the customer experience. You can provide your customers with the newest devices and functionalities within a short period of time.","\n      ","\n    ","\n    ","\n    ","The first device that’s available for provisioning via PortaOne iPaaS is Yealink W80B – an IP multi-cell base station. To read about other IP phones provisioning, refer to the ","Customer Premises Equipment (CPE) provisioning and inventory"," chapter\n      in the ","PortaBilling® Administrator Guide",".","\n    ","This is how CPE provisioning via PortaOne iPaaS works:","\n    ","Let’s say the service provider, Easy Call, wants to provision Yealink W80B to their customers. Since this device model is available via PortaOne iPaaS, Easy Call subscribes to the CPE provisioning service and enables it on their installation.","\n    ","The rest of the configuration process for creating a new CPE profile and managing the IP phone inventory in PortaBilling® remains the same as before. Refer to the ","Auto-provisioning of IP Phones"," handbook for the detailed configuration.","\n    ","When an administrator creates a CPE profile for Yealink W80B, PortaBilling® queries the CPE provisioning container via the API to generate a CPE profile. The CPE provisioning container returns the generated CPE profile and it is stored in the PortaBilling®\n      database along with the internal CPE profiles.","\n    ","\n    ","Then the administrator creates the Yealink W80B CPE device and assigns it to an account. PortaBilling® generates a configuration file with the CPE device parameters (username, password, device’s MAC address, etc.) and sends it to the CPE provisioning\n      container. This configuration file is used in the CPE provisioning container to adjust Yealink W80B’s internal configuration.","\n    ","Now Yealink W80B is ready to use by end users.","\n    ","\n    ","Once you subscribe to PortaOne iPaaS, PortaOne support provides you with credentials to enable CPE provisioning on the Configuration server.","\n    ","\n      ","\n        ","Go to the ","Web_Cluster.Global.ExternalCpeProvisioningService"," group and specify the ","CustomerName ","and ","InstallationName ","options as defined in RT.","\n        ","\n      ","\n      ","\n        ","Go to a specific environment and set the ","ExternalCpeProvisioningService",".Enabled"," option to ","Yes",".","\n      ","\n      ","\n        ","Specify the credentials provided by our support team under the ","Login ","and ","Password ","options.","\n        ","\n      ","\n    ","\n    ","\n    ","The first payment processor that is currently available in PortaBilling® via PortaOne® iPaaS is ","Stripe",". Stripe is one of the most widely used payment processing systems in the world\n      and supports over 135 currencies. It also supports token-based payments, enables you to accept online payments right away, and allows your customers to set up recurring auto-payments.","\n    ","PortaOne® iPaaS subscribers running MR87 and above can select and use Stripe from within the PortaBilling® web interface and receive credit card payments with minimal integration efforts. For MR55–MR86, the integration process with Stripe is also\n      available via a backport patch for the specific MR.","\n    ","In this integration, PortaOne® iPaaS communicates with the on-premise PortaSwitch® and the Stripe payment processor transfers the payment data via API to the PortaOne® iPaaS, which acts as a cloud intermediary.","\n    ","Let’s see how Stripe payment processor can be integrated in two different scenarios:","\n    ","\n    ","Panda Telecom runs MR70 and requires support for online payments using Stripe. Panda Telecom turns to PortaOne® to request integration and pays the PortaOne® iPaaS subscription fee. The rest of the process is as follows:","\n    ","\n      ","\n        ","The PortaOne® development team prepares a backport patch for the exact PortaBilling® version used by Panda Telecom (for an additional price).","\n      ","\n      ","\n        ","The backport patch for Stripe integration is applied within Panda Telecom’s PortaSwitch® infrastructure.","\n      ","\n      ","\n        ","Panda Telecom’s PortaSwitch® authorization credentials for iPaaS are set on the Configuration server.","\n      ","\n    ","\n    ","As a result, Stripe appears on the list of payment processors available for Panda Telecom.","\n    ","Next, Panda Telecom signs a contract with Stripe for a merchant account and receives the Stripe API key. After configuring the Stripe merchant account from within the PortaBilling® web interface, Panda Telecom can use Stripe as a payment processor.\n      The whole integration process takes 1-2 weeks.","\n    ","\n    ","StarlightNetrunsMR87 (or later versions) and wants support for online payments with Stripe. In this case, the process is similar but faster (up to 1 week), as there is no need for a backport patch:","\n    ","\n      ","\n        ","StarlightNetturnsto PortaOne® to request integration and pays the PortaOne® iPaaS subscription fee.","\n      ","\n      ","\n        ","StarlightNet’s PortaSwitch® authorization credentials for iPaaS are set on the Configuration server.","\n      ","\n    ","\n    ","As a result, Stripe now appears on the list of payment processors available for StarlightNet. Next, StarlightNet signs a contract with Stripe for a merchant account and receives the Stripe API key. After configuring the Stripe merchant account within\n      the PortaBilling® web interface, StarlightNet can use Stripe as a payment processor.","\n    ","If you would like to add any other payment processors besides Stripe, this can also be done with the help of PortaOne® iPaaS. Such new integrations take up to several weeks and do not require an update.","\n    ","For the full list of currently available payment processors that support token-based payments in PortaBilling®, refer to ","Appendix F"," of the ","PortaBilling® Administrator Guide",".","\n    ","\n    ","The initial configuration for enabling Stripe is done via the Configurator by PortaOne® admins after you subscribe to PortaOne® iPaaS.","\n    ","Next, you need to create a merchant account with Stripe (might take a while until you get verified) and get your API key. Using this API key, you can configure Stripe as a payment processor within PortaBilling® using the step-by-step instruction in\n      the ","Configuring Stripe payment processor handbook",".","\n  ","\n\n"],"3":["PortaOne iPaaS"," ","CPE provisioning via PortaOne iPaaS","Payment processor integrations via PortaOne iPaaS (Stripe payment processor)"],"4":["Configuration:","Configuration:"],"6":["Benefits:","Scenario 1. Stripe integration for PortaSwitch® MR86 and earlier","Scenario 2. Stripe integration for PortaSwitch® MR87 and later versions"],"id":"22"})