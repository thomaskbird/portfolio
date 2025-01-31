import 'photoswipe/dist/photoswipe.css';
import styles from './MediaGallery.module.scss';
import {Gallery, Item} from "react-photoswipe-gallery";
import Image from "next/image";

type MediaGalleryProps = {
  gallery: { [key: string]: any };
}

const MediaGallery = ({ gallery }: MediaGalleryProps) => {
  return (
    <Gallery>
      <div className={styles.gallery}>
        {gallery.map((item) => (
          <Item
            key={item.sys.id}
            original={'https:' + item.fields.file.url}
            thumbnail={'https:' + item.fields.file.url}
            alt={item.fields.file.title ?? 'No alt text supplied'}
            width={item.fields.file.details.image.width}
            height={item.fields.file.details.image.height}
          >
            {({ ref, open }) => (
              <div className={styles.itemWrap}>
                <Image
                  ref={ref}
                  onClick={open}
                  className={styles.image}
                  src={'https:' + item.fields.file.url}
                  alt={item.fields.file.title ?? 'No alt text supplied'}
                  width={item.fields.file.details.image.width}
                  height={item.fields.file.details.image.height}
                />
              </div>
            )}
          </Item>
        ))}
      </div>
    </Gallery>
  )
}

export default MediaGallery;
