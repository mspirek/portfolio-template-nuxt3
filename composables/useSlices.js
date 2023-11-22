import HeroSlice from '@/slices/HeroSlice.vue';
import TextSlice from '@/slices/TextSlice.vue';
import ImageSlice from '@/slices/ImageSlice.vue';
import EmbedSlice from '@/slices/EmbedSlice.vue';
import CtaSlice from '@/slices/CtaSlice.vue';
import GallerySlice from '@/slices/GallerySlice.vue';
import BrandsSlice from '@/slices/BrandsSlice.vue';
import WorkSlice from '@/slices/WorkSlice.vue';


export const useSlices = () => {

  const slices = {
    hero_slice: HeroSlice,
    text_slice: TextSlice,
    image_slice: ImageSlice,
    embed_slice: EmbedSlice,
    cta_slice: CtaSlice,
    gallery_slice: GallerySlice,
    brands_slice: BrandsSlice,
    work_slice: WorkSlice,
  };

  return {
    slices,
  };
};
