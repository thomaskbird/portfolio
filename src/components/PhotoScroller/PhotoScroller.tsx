import 'photoswipe/dist/photoswipe.css';
import {Gallery, Item} from "react-photoswipe-gallery";
import Image from "next/image";
import styles from './PhotoScroller.module.scss';
import ScrollSnapper from "@/components/ScrollSnapper/ScrollSnapper";
import useRetrievePhotos from "@/hooks/useRetrievePhotos";

const PhotoScroller = () => {
  const { photos, isLoading, error } = useRetrievePhotos();

  return (
    <Gallery>
      <ScrollSnapper>
        {!isLoading && (photos as []).map(photo => {
          const fields = photo.fields;
          const file = fields.file;
          const meta = file.details.image;

          return (
            <Item
              key={photo.sys.id}
              original={`https:${file.url}`}
              thumbnail={`https:${file.url}`}
              alt={fields.title}
              width={meta.width}
              height={meta.height}
            >
              {({ref, open}) => (
                <Image
                  ref={ref}
                  onClick={open}
                  className={styles.photo}
                  src={`https:${file.url}`}
                  alt={fields.title ?? 'No alt text supplied'}
                  title={fields.title ?? 'No title text supplied'}
                  width={meta.width}
                  height={meta.height}
                />
              )}
            </Item>
          )
        })}
      </ScrollSnapper>
    </Gallery>
  )
}

export default PhotoScroller;
