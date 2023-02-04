
export default (options) => {
  const { apiKey } = options
  return {
    id: 'steam',
    name: 'Steam',
    type: 'openid',
    authenticationUrl: 'https://steamcommunity.com/openid',
    realm: null,
    stateless: true,
    strict: false,
    extensions: [],
    async mapIdentifierToProfile (identifier) {
      // The identifier is an URL to the users profile.
      // Extract only the SteamID from it.
      const [steamID] = identifier.split('/').slice(-1)

      const response = await fetch(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apiKey}&steamids=${steamID}&format=json`)
      if (!response.ok) {
        throw new Error(`Unable to fetch Steam Profile. Status: ${response.status}`)
      }
      const json = await response.json()
      const [{
        steamid: id,
        personaname: name,
        avatarfull: image
      }] = json.response.players

      return { id, email: id, name, image }
    },
    style: {
        logo: "https://raw.githubusercontent.com/nextauthjs/next-auth/main/packages/next-auth/provider-logos/steam.svg",
        logoDark:
          "https://raw.githubusercontent.com/nextauthjs/next-auth/main/packages/next-auth/provider-logos/steam.svg",
        bg: "#fff",
        text: "#000",
        bgDark: "#000",
        textDark: "#fff",
      },
    ...options
  }
}