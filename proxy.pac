function FindProxyForURL(url, host) {

    // Alle Verbindungen zu nige66.jamfcloud.com geblockt

    if (dnsDomainIs(host, "nige66.jamfcloud.com")) {
        return "PROXY localhost";
    }

    // Alle anderen Verbindungen ohne Proxy

    return "DIRECT";
}
