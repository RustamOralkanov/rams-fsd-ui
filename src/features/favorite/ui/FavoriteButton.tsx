import { PartialFlatsItem } from "@/features/flats/model/types/flats.model";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useRedux";
import { FavoriteIcon, FavoriteSolidIcon } from "@/shared/icons";
import { toggleFavorite } from "../model/reducer";

export const FavoriteButton: React.FC<PartialFlatsItem> = (props) => {
    const dispatch = useAppDispatch();
    const { favorites } = useAppSelector((state) => state.favorites);

    const isFavorite = favorites.some((favorite) => favorite.id === props.id);

    const handleFavorites = () => {
        dispatch(toggleFavorite(props));
    };
    return isFavorite ? <FavoriteSolidIcon onClick={handleFavorites} /> : <FavoriteIcon onClick={handleFavorites} />;
};
