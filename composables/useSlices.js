import HeroSlice from '@/slices/HeroSlice';
import TextSlice from '@/slices/TextSlice';
import ImageSlice from '@/slices/ImageSlice';
import EmbedSlice from '@/slices/EmbedSlice';
import CtaSlice from '@/slices/CtaSlice';
import GallerySlice from '@/slices/GallerySlice';


export const useSlices = () => {

  const slices = {
    hero_slice: HeroSlice,
    text_slice: TextSlice,
    image_slice: ImageSlice,
    embed_slice: EmbedSlice,
    cta_slice: CtaSlice,
    gallery_slice: GallerySlice,
  };

  return {
    slices,
  };
};
