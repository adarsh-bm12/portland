rh._.exports({"0":["RADIUS Proxy "],"1":["\n  ","\n    ","\n    ","The RADIUS proxy is deployed on the target system. It receives RADIUS requests for accounts to be charged for a session. It also detects to which system (source or target) accounts belong. The RADIUS proxy then sends the requests to that specific\n      system.","\n    ","When a RADIUS server processes the request, the response is sent back to the RADIUS proxy. The RADIUS proxy relays the response to the NAS.","\n    ","This allows external RADIUS clients (e.g. NAS) to function seamlessly with Dual Version PortaBilling®. It also allows the CDR mediator process to run on either system so it can perform file extraction and parsing yet put the charging data records\n      into the system where the account currently resides.","\n    ","To add fault tolerance to the RADIUS proxy, it can be clustered with the virtual IP address serving as the communication point for the NAS. If, for some reason, the active RADIUS proxy node becomes unavailable, the virtual IP address switches to another\n      node. That node then becomes active and handles RADIUS request processing.","\n  ","\n\n"],"3":["RADIUS Proxy"],"id":"27"})