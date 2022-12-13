import openidClient from "./client"

export default async (query, host, provider) => {
  const client = openidClient(provider)

  // Recreate the url for openid 2.0 npm package 'openid' to verify assertion.
  const encodedResponseNonce = encodeURIComponent(
    query["openid.response_nonce"]
  )
  const encodedSignature = encodeURIComponent(query["openid.sig"])
  const verifyUrl = `${host}/?openid.ns=${query["openid.ns"]}&openid.mode=${query["openid.mode"]}&openid.op_endpoint=${query["openid.op_endpoint"]}&openid.claimed_id=${query["openid.claimed_id"]}&openid.identity=${query["openid.identity"]}&openid.return_to=${query["openid.return_to"]}&openid.response_nonce=${encodedResponseNonce}&openid.assoc_handle=${query["openid.assoc_handle"]}&openid.signed=${query["openid.signed"]}&openid.sig=${encodedSignature}`

  const { claimedIdentifier } = await client.verifyAssertion(verifyUrl)

  const profile = await provider.mapIdentifierToProfile(claimedIdentifier)

  return {
    claimedIdentifier,
    account: {
      providerAccountId: provider.id,
      /** id of the user this account belongs to. */
      userId: profile.id,
      /** id of the provider used for this account */
      provider: provider.id,
      /** Provider's type for this account */
      type: provider.type,
    },
    profile: {
      name: profile.name,
      email: profile.email ? profile.email.toLowerCase() : null,
      image: profile.image,
    },
  }
}
