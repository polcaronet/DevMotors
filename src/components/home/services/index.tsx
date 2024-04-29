import { HomeProps } from '@/utils/actions/home.type'
import styles from './styles.module.scss'
import Image from 'next/image'

export function Services({ object }: HomeProps){
  return(
    <>
    <section className={styles.containerAbout} id="servicos">
      <article className={styles.innerAbout}>
        <h1 className={styles.title}>Sobre</h1>
        <p>{object.metadata.about.description}</p>
      </article>

      <div className={styles.bannerAbout}>
        <Image
          className={styles.imageAbout}
          alt="Imagem ilustrativa sobre a empresa"
          quality={100}
          fill={true}
          sizes='(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw'
          src={object.metadata.about.banner.url}
        />
      </div>
    </section>

    <h2 className={styles.servicesTitle}>
      conheça nossos serviços
    </h2>
    <section className={styles.services}>
      {object.metadata.services.map( service => (
        <article key={service.description} 
         className={styles.service}>
          <div className={styles.innerService}>
          <Image
            className={styles.imageService}
            alt="Imagem do serviço"
            quality={100}
            fill={true}
            sizes='(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw'
            src={service.image.url}
          />
          </div>
         <p>{service.description}</p>
        </article>
      ))}
    </section>
   </>
  )
}