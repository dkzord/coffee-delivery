import expressIce from '@/assets/expressIce.svg'
import expressMilk from '@/assets/expressMilk.svg'
import expressLatte from '@/assets/expressLatte.svg'
import expressArabe from '@/assets/expressArabe.svg'
import expressCreamy from '@/assets/expressCreamy.svg'
import expressCubano from '@/assets/expressCubano.svg'
import expressHawaii from '@/assets/expressHawaii.svg'
import expressAmerican from '@/assets/expressAmerican.svg'
import expressIrlandes from '@/assets/expressIrlandes.svg'
import expressMacchiato from '@/assets/expressMacchiato.svg'
import expressMocaccino from '@/assets/expressMocaccino.svg'
import expressCappuccino from '@/assets/expressCappuccino.svg'
import expressTraditional from '@/assets/expressTraditional.svg'
import expressChocolateHot from '@/assets/expressChocolateHot.svg'

const imagesMap: Record<string, string> = {
  expresstraditional: expressTraditional,
  expressamerican: expressAmerican,
  expresscreamy: expressCreamy,
  expressice: expressIce,
  expressmilk: expressMilk,
  expresslatte: expressLatte,
  expresscappuccino: expressCappuccino,
  expressmacchiato: expressMacchiato,
  expressmocaccino: expressMocaccino,
  expresschocolatehot: expressChocolateHot,
  expresscubano: expressCubano,
  expresshawaii: expressHawaii,
  expressarabe: expressArabe,
  expressirlandes: expressIrlandes,
}

export const imageCoffee = (img: string): string => {
  const image = imagesMap[img.toLowerCase()]
  return image || expressTraditional
}
