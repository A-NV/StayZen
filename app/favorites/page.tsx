import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/navbar/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListing from "../actions/getFavoriteListings";
import FavoriteClient from "./FavoritesClient";

const ListingPage = async () => {
  const listings = await getFavoriteListing();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found"
          subtitle="looks like you have no favorites listings"
        />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <FavoriteClient
        listings={listings}
        currentUser={currentUser}
      />
    </ClientOnly>
  )
}
 export default ListingPage;
