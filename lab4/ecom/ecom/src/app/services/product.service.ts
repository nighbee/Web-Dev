import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [
    { id: 0, name: 'All' },
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Headphones' },
    { id: 3, name: 'Smart Watches' },
    { id: 4, name: 'Laptops' }
  ];

  private productsSignal = signal<Product[]>([
    // Smartphones (categoryId: 1) - 5 products
    {
      id: 1,
      name: 'Смартфон Apple iPhone 17 Pro 256GB оранжевый',
      description: 'Флагманский смартфон с мощным чипом A19 Pro, экраном OLED Super Retina XDR 6.3", тройной камерой 48MP и поддержкой 5G.',
      price: 763903,
      rating: 4.9,
      reviewCount: 937,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
      categoryId: 1,
      likes: 0
    },
    {
      id: 2,
      name: 'Смартфон Redmi A5 4 ГБ/128 ГБ черный',
      description: 'Мощный смартфон с процессором Unisoc T7250, экраном 6.88" IPS, емкой батареей 5200 мАч и основной камерой 32MP.',
      price: 49990,
      rating: 4.9,
      reviewCount: 1135,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p27/p8f/67214824.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p27/p8f/67214824.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p27/p8f/67214824.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/redmi-a5-4-gb-128-gb-chernyi-137034687/?c=750000000',
      categoryId: 1,
      likes: 0
    },
    {
      id: 3,
      name: 'Смартфон Samsung Galaxy A07 6 ГБ/128 ГБ лавандовый',
      description: 'Универсальный смартфон с 6 ГБ RAM, 128 ГБ памяти, батареей 5000 мАч и экраном большого размера.',
      price: 66666,
      rating: 4.9,
      reviewCount: 541,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p0d/pdb/61291709.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p0d/pdb/61291709.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p0d/pdb/61291709.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a07-6-gb-128-gb-lavandovyi-144817894/?c=750000000',
      categoryId: 1,
      likes: 0
    },
    {
      id: 4,
      name: 'Смартфон Apple iPhone 16 128GB черный',
      description: 'iPhone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом.',
      price: 490000,
      rating: 4.9,
      reviewCount: 1675,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000',
      categoryId: 1,
      likes: 0
    },
    {
      id: 5,
      name: 'Смартфон Redmi A3x 3 ГБ/64 ГБ черный',
      description: 'Мощное устройство с высокой производительностью и стильным дизайном, с процессором Unisoc Tiger T603 и экраном 90 Гц.',
      price: 52900,
      rating: 4.8,
      reviewCount: 1037,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/redmi-a3x-3-gb-64-gb-chernyi-121654928/?c=750000000',
      categoryId: 1,
      likes: 0
    },

    // Headphones (categoryId: 2) - 5 products
    {
      id: 6,
      name: 'Наушники WIWU Earbuds 303 белый',
      description: 'Универсальные наушники с USB Type-C разъемом, встроенным микрофоном и отличной звукоизоляцией.',
      price: 528,
      rating: 4.4,
      reviewCount: 404,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p01/pf1/9210783.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p01/pf1/9210783.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p01/pf1/9210783.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-wiwu-earbuds-303-belyi-118287281/?c=750000000',
      categoryId: 2,
      likes: 0
    },
    {
      id: 7,
      name: 'Наушники Apple EarPods USB-C белый',
      description: 'Классические наушники Apple с USB Type-C, встроенным микрофоном и универсальной совместимостью с iPhone и Android.',
      price: 10673,
      rating: 4.9,
      reviewCount: 3150,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p44/p27/108964604.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p44/p27/108964604.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p44/p27/108964604.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-earpods-usb-c-belyi-114086432/?c=750000000',
      categoryId: 2,
      likes: 0
    },
    {
      id: 8,
      name: 'Наушники JASPER JS70 бежевый',
      description: 'Беспроводные наушники с Bluetooth, временем работы до 6 часов, глубокими басами и чистыми высокими частотами.',
      price: 3490,
      rating: 5.0,
      reviewCount: 229,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa8/p4f/66068562.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pa8/p4f/66068562.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pa8/p4f/66068562.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-jasper-js70-bezhevyi-146025818/?c=750000000',
      categoryId: 2,
      likes: 0
    },
    {
      id: 9,
      name: 'Наушники Razer Blackshark V2 X черный',
      description: 'Полноразмерные игровые наушники с мощным звуком, 12-28000 Гц частотой воспроизведения и съемным микрофоном.',
      price: 15500,
      rating: 4.5,
      reviewCount: 394,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h98/64136271331358.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h21/h98/64136271331358.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h21/h98/64136271331358.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-razer-blackshark-v2-x-chernyi-100934284/?c=750000000',
      categoryId: 2,
      likes: 0
    },
    {
      id: 10,
      name: 'Наушники Marshall Major IV черный',
      description: 'Bluetooth гарнитура с 40 мм динамиками, до 80 часов воспроизведения, складной конструкцией и управлением воспроизведением.',
      price: 18900,
      rating: 4.8,
      reviewCount: 2647,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-marshall-major-iv-chernyi-102138144/?c=750000000',
      categoryId: 2,
      likes: 0
    },

    // Smart Watches (categoryId: 3) - 4 products
    {
      id: 11,
      name: 'Смарт-часы YUNTEKO DMi50 графитовый-черный',
      description: 'Смарт-часы с батареей 400mAh (8-12 дней работы), водозащитой IP68 и стильным дизайном.',
      price: 29888,
      rating: 4.9,
      reviewCount: 598,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/p52/58332179.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p64/p52/58332179.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p64/p52/58332179.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/yunteko-dmi50-grafitovyi-chernyi-112844424/?c=750000000',
      categoryId: 3,
      likes: 0
    },
    {
      id: 12,
      name: 'Смарт-часы YAMI i1 42 мм золотистый',
      description: 'Инновационные смарт-часы с 42mm экраном, функциями фитнес-браслета, мониторингом здоровья и двумя ремешками в комплекте.',
      price: 19990,
      rating: 4.9,
      reviewCount: 663,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p51/pd4/9015777.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p51/pd4/9015777.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p51/pd4/9015777.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/yami-i1-42-mm-zolotistyi-zolotistyi-112674629/?c=750000000',
      categoryId: 3,
      likes: 0
    },
    {
      id: 13,
      name: 'Смарт-часы ARTEO AS10 41 мм розовый',
      description: 'Стильные смарт-часы с современным дизайном, мониторингом здоровья, долговечной батареей и уведомлениями в реальном времени.',
      price: 9990,
      rating: 5.0,
      reviewCount: 477,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p0c/p4d/82291138.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p0c/p4d/82291138.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p0c/p4d/82291138.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/arteo-as10-41-mm-rozovyi-129639580/?c=750000000',
      categoryId: 3,
      likes: 0
    },
    {
      id: 14,
      name: 'Смарт-часы NOLIMIT REDLINE черный',
      description: 'Надежные смарт-часы с AMOLED дисплеем 1.43", водозащитой IP67, GPS-трекингом и мониторингом здоровья.',
      price: 29900,
      rating: 5.0, 
      reviewCount: 267,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p6d/p33/88870604.jpeg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p6d/p33/88870604.jpeg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p6d/p33/88870604.jpeg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/smart-chasy-nolimit-redline-chernyi-141361891/?c=750000000',
      categoryId: 3,
      likes: 0
    },
    {
      id: 20,
      name: 'Кварцевые Часы ЧБ12381 пластик, полимер, полимерный пластик',
      description: 'Мужские часы черного матового цвета. Легкие за счет эко материалов, не ощутимы на руке. Очень удобные в носке, подходят на любую кисть.',
      price: 864,
      rating: 4.5,
      reviewCount: 743,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb5/p44/46875937.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pb5/p44/46875937.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb5/p44/46875937.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/kvartsevye-chb12381-plastik-polimer-polimernyi-plastik-131454353/?c=750000000',
      categoryId: 3,
      likes: 0
    },

    // Laptops (categoryId: 4) - 5 products
    {
      id: 15,
      name: 'Ноутбук Castom E157D 15.6" / 16 Гб / SSD 1000 Гб / Win 11',
      description: 'Универсальный ноутбук с процессором AMD Ryzen 5, 16 Гб RAM, SSD 1000 Гб и ярким IPS-экраном.',
      price: 249900,
      rating: 4.7,
      reviewCount: 255,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p32/pf7/64711809.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p32/pf7/64711809.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p32/pf7/64711809.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/castom-e157d-15-6-16-gb-ssd-1000-gb-win-11-101725124/?c=750000000',
      categoryId: 4,
      likes: 0
    },
    {
      id: 16,
      name: 'Ноутбук Biraz EVO N95 15.6" / 16 Гб / SSD 512 Гб / Win 11',
      description: 'Мощный ноутбук с процессором Intel N95, 16 Гб RAM, SSD 512 Гб, Full HD IPS экраном и сканером отпечатков пальцев.',
      price: 193500,
      rating: 4.6,
      reviewCount: 199,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p71/pf6/41734529.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p71/pf6/41734529.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p71/pf6/41734529.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/biraz-evo-n95-15-6-16-gb-ssd-512-gb-win-11-brz-evo-n95-139514916/?c=750000000',
      categoryId: 4,
      likes: 0
    },
    {
      id: 17,
      name: 'Ноутбук Apple MacBook Air 13 2025 / 16 Гб / SSD 256 Гб / macOS',
      description: 'Ультрабук с процессором Apple M4, 16 Гб RAM, SSD 256 Гб, камерой 12 Мп и аккумулятором на 53.8 Вт*ч.',
      price: 520781,
      rating: 4.9,
      reviewCount: 122,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000',
      categoryId: 4,
      likes: 0
    },
    {
      id: 18,
      name: 'Ноутбук ThundeRobot 911S Core D 15.6" / 16 Гб / SSD 512 Гб / Без ОС',
      description: 'Игровой ноутбук с IPS-экраном 144 Гц, видеокартой GeForce RTX 3050, процессором Intel Core i5-12450H.',
      price: 496000,
      rating: 4.8,
      reviewCount: 400,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/thunderobot-911s-core-d-15-6-16-gb-ssd-512-gb-bez-os-jt009k00f-117046774/?c=750000000',
      categoryId: 4,
      likes: 0
    },
    {
      id: 19,
      name: 'Ноутбук Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS',
      description: 'Ультрабук с чипом Apple M1, 8 Гб RAM, SSD 256 Гб, дисплеем Retina и Touch ID.',
      price: 439982,
      rating: 4.9,
      reviewCount: 584,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
      categoryId: 4,
      likes: 0
    }
  ]);

  products = this.productsSignal.asReadonly();

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    if (categoryId === 0) {
      // "All" category - return all products
      return this.productsSignal();
    }
    return this.productsSignal().filter(p => p.categoryId === categoryId);
  }

  getCategoryById(id: number): Category | undefined {
    return this.categories.find(c => c.id === id);
  }

  likeProduct(productId: number): void {
    this.productsSignal.update(products => 
      products.map(p => 
        p.id === productId ? { ...p, likes: p.likes + 1 } : p
      )
    );
  }

  deleteProduct(productId: number): void {
    this.productsSignal.update(products => 
      products.filter(p => p.id !== productId)
    );
  }
}
