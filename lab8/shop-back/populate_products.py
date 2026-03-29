import os
import django

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shop_back.settings')
django.setup()

from api.models import Category, Product

def populate():
    # Clear existing data
    print("Clearing existing products and categories...")
    Product.objects.all().delete()
    Category.objects.all().delete()

    # Define categories
    categories_data = {
        1: 'Smartphones',
        2: 'Headphones',
        3: 'Smart Watches',
        4: 'Laptops'
    }

    # Create categories
    category_objects = {}
    for cid, name in categories_data.items():
        category = Category.objects.create(name=name)
        category_objects[cid] = category
        print(f"Created category: {name}")

    # Define products from db-product-list.md
    products_data = [
        # Smartphones
        {
            'name': 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
            'categoryId': 1,
            'description': 'Флагманский смартфон с мощным чипом A19 Pro, экраном OLED Super Retina XDR 6.3\", тройной камерой 48MP и поддержкой 5G.',
            'price': 763903,
            'count': 10,
            'is_active': True,
            'image_url': 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-large',
            'link': 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
        },
        {
            'name': 'Смартфон Redmi A5 4 ГБ/128 ГБ черный',
            'categoryId': 1,
            'description': 'Мощный смартфон с процессором Unisoc T7250, экраном 6.88\" IPS, емкой батареей 5200 мАч и основной камерой 32MP.',
            'price': 49990,
            'count': 15,
            'is_active': True,
            'image_url': 'https://resources.cdn-kaspi.kz/img/m/p/p27/p8f/67214824.png?format=gallery-large',
            'link': 'https://kaspi.kz/shop/p/redmi-a5-4-gb-128-gb-chernyi-137034687/?c=750000000'
        },
        {
            'name': 'Смартфон Samsung Galaxy A07 6 ГБ/128 ГБ лавандовый',
            'categoryId': 1,
            'description': 'Универсальный смартфон для активной жизни, сочетающий большой экран, ёмкий аккумулятор и современные функции.',
            'price': 66666,
            'count': 20,
            'is_active': True,
            'image_url': 'https://resources.cdn-kaspi.kz/img/m/p/p0d/pdb/61291709.jpg?format=gallery-large',
            'link': 'https://kaspi.kz/shop/p/samsung-galaxy-a07-6-gb-128-gb-lavandovyi-144817894/?c=750000000'
        },
        {
            'name': 'Смартфон Apple iPhone 16 128Gb черный',
            'categoryId': 1,
            'description': 'Phone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом.',
            'price': 490000,
            'count': 8,
            'is_active': True,
            'image_url': 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
            'link': 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000'
        },
        {
            'name': 'Смартфон Redmi A3x 3 ГБ/64 ГБ черный',
            'categoryId': 1,
            'description': 'Смартфон Redmi A3x 3 ГБ/64 ГБ — это мощное устройство с высокой производительностью и стильным дизайном.',
            'price': 52900,
            'count': 25,
            'is_active': True,
            'image_url': 'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-medium',
            'link': 'https://kaspi.kz/shop/p/redmi-a3x-3-gb-64-gb-chernyi-121654928/?c=750000000'
        },
        # Headphones
        {
            'name': 'Наушники WIWU Earbuds 303 белый',
            'categoryId': 2,
            'description': 'WIWU Earbuds 303 — это универсальные наушники для тех, кто ценит качественный звук и удобство использования.',
            'price': 528,
            'count': 50,
            'is_active': True,
            'image_url': 'https://resources.cdn-kaspi.kz/img/m/p/p01/pf1/9210783.png?format=gallery-large',
            'link': 'https://kaspi.kz/shop/p/naushniki-wiwu-earbuds-303-belyi-118287281/?c=750000000'
        },
        {
            'name': 'Наушники Apple EarPods USB-C белый',
            'categoryId': 2,
            'description': 'Наушники Apple USB-C MYQY3ZM/A — это удобное и практичное решение для тех, кто предпочитает классический дизайн.',
            'price': 10673,
            'count': 30,
            'is_active': True,
            'image_url': 'https://resources.cdn-kaspi.kz/img/m/p/p44/p27/108964604.png?format=gallery-large',
            'link': 'https://kaspi.kz/shop/p/naushniki-apple-earpods-usb-c-belyi-114086432/?c=750000000'
        },
        {
            'name': 'Наушники JASPER JS70 бежевый',
            'categoryId': 2,
            'description': 'Jasper JS70 — свобода звука в твоём ритме. Стильный дизайн, удобная посадка и современная начинка.',
            'price': 3490,
            'count': 40,
            'is_active': True,
            'image_url': 'https://resources.cdn-kaspi.kz/img/m/p/pa8/p4f/66068562.jpg?format=gallery-large',
            'link': 'https://kaspi.kz/shop/p/naushniki-jasper-js70-bezhevyi-146025818/?c=750000000'
        },
        {
            'name': 'Наушники Razer Blackshark V2 X черный',
            'categoryId': 2,
            'description': 'Игровые наушники Razer Blackshark V2 X с закрытым акустическим оформлением и отличным звуком.',
            'price': 15500,
            'count': 12,
            'is_active': True,
            'image_url': 'https://resources.cdn-kaspi.kz/img/m/p/h21/h98/64136271331358.jpg?format=gallery-medium',
            'link': 'https://kaspi.kz/shop/p/naushniki-razer-blackshark-v2-x-chernyi-100934284/?c=750000000'
        },
        {
            'name': 'Наушники Marshall Major IV черный',
            'categoryId': 2,
            'description': 'Bluetooth гарнитура MARSHALL Major IV с динамическими излучателями 40 мм и до 80 часов воспроизведения.',
            'price': 18900,
            'count': 15,
            'is_active': True,
            'image_url': 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium',
            'link': 'https://kaspi.kz/shop/p/naushniki-marshall-major-iv-chernyi-102138144/?c=750000000'
        },
        # Smart Watches
        {
            'name': 'Смарт-часы YUNTEKO DMi50 графитовый-черный',
            'categoryId': 3,
            'description': 'Смарт часы YUNTEKO DMi50 — умнее других \"умных\" часов, крепче твоих нервов!',
            'price': 29888,
            'count': 14,
            'is_active': True,
            'image_url': 'https://resources.cdn-kaspi.kz/img/m/p/p64/p52/58332179.jpg?format=gallery-large',
            'link': 'https://kaspi.kz/shop/p/yunteko-dmi50-grafitovyi-chernyi-112844424/?c=750000000'
        },
        {
            'name': 'Смарт-часы YAMI i1 42 мм золотистый-золотистый',
            'categoryId': 3,
            'description': 'Инновационный гаджет, который объединяет в себе функции умных часов и фитнес браслета.',
            'price': 19990,
            'count': 22,
            'is_active': True,
            'image_url': 'https://resources.cdn-kaspi.kz/img/m/p/p51/pd4/9015777.jpg?format=gallery-large',
            'link': 'https://kaspi.kz/shop/p/yami-i1-42-mm-zolotistyi-zolotistyi-112674629/?c=750000000'
        },
        {
            'name': 'Смарт-часы ARTEO AS10 41 мм розовый',
            'categoryId': 3,
            'description': 'Стильные и современные смарт-часы Arteo AS10 с мониторингом здоровья.',
            'price': 9990,
            'count': 35,
            'is_active': True,
            'image_url': 'https://resources.cdn-kaspi.kz/img/m/p/p0c/p4d/82291138.png?format=gallery-large',
            'link': 'https://kaspi.kz/shop/p/arteo-as10-41-mm-rozovyi-129639580/?c=750000000'
        },
        {
            'name': 'Смарт-часы NOLIMIT REDLINE черный',
            'categoryId': 3,
            'description': 'Смарт-часы NOLIMIT REDLINE – надёжный аксессуар для активных и энергичных людей.',
            'price': 29900,
            'count': 18,
            'is_active': True,
            'image_url': 'https://resources.cdn-kaspi.kz/img/m/p/p6d/p33/88870604.jpeg?format=gallery-large',
            'link': 'https://kaspi.kz/shop/p/smart-chasy-nolimit-redline-chernyi-141361891/?c=750000000'
        },
        # Laptops
        {
            'name': 'Ноутбук Castom E157D 15.6\" / 16 Гб / SSD 1000 Гб / Win 11',
            'categoryId': 4,
            'description': 'Универсальный ноутбук для работы, учебы и развлечений с процессором AMD Ryzen 5.',
            'price': 249900,
            'count': 5,
            'is_active': True,
            'image_url': 'https://resources.cdn-kaspi.kz/img/m/p/p32/pf7/64711809.jpg?format=gallery-medium',
            'link': 'https://kaspi.kz/shop/p/castom-e157d-15-6-16-gb-ssd-1000-gb-win-11-101725124/?c=750000000'
        },
        {
            'name': 'Ноутбук Biraz EVO N95 15.6\" / 16 Гб / SSD 512 Гб / Win 11',
            'categoryId': 4,
            'description': 'Мощное и современное решение для повседневных задач с процессором Intel N95.',
            'price': 193500,
            'count': 7,
            'is_active': True,
            'image_url': 'https://resources.cdn-kaspi.kz/img/m/p/p71/pf6/41734529.png?format=gallery-medium',
            'link': 'https://kaspi.kz/shop/p/biraz-evo-n95-15-6-16-gb-ssd-512-gb-win-11-brz-evo-n95-139514916/?c=750000000'
        },
        {
            'name': 'Ноутбук Apple MacBook Air 13 2025 / 16 Гб / SSD 256 Гб / macOS',
            'categoryId': 4,
            'description': 'Apple MacBook Air 13 2025 — ультрабук с процессором Apple M4 и изящным дизайном.',
            'price': 520781,
            'count': 3,
            'is_active': True,
            'image_url': 'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
            'link': 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000'
        },
        {
            'name': 'Ноутбук ThundeRobot 911S Core D 15.6\" / 16 Гб / SSD 512 Гб / Без ОС',
            'categoryId': 4,
            'description': 'Игровой ноутбук с IPS-матрицей 144 Гц и видеокартой GeForce RTX 3050.',
            'price': 496000,
            'count': 4,
            'is_active': True,
            'image_url': 'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium',
            'link': 'https://kaspi.kz/shop/p/thunderobot-911s-core-d-15-6-16-gb-ssd-512-gb-bez-os-jt009k00f-117046774/?c=750000000'
        },
        {
            'name': 'Ноутбук Apple MacBook Air 13 2020 13.3\" / 8 Гб / SSD 256 Гб / macOS',
            'categoryId': 4,
            'description': 'MacBook Air на базе первого чипа Apple M1. Грандиозный прорыв в производительности.',
            'price': 439982,
            'count': 6,
            'is_active': True,
            'image_url': 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
            'link': 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000'
        }
    ]

    # Create products
    for p_data in products_data:
        category = category_objects[p_data['categoryId']]
        Product.objects.create(
            name=p_data['name'],
            price=p_data['price'],
            description=p_data['description'],
            count=p_data['count'],
            is_active=p_data['is_active'],
            category=category,
            image_url=p_data['image_url'],
            link=p_data['link']
        )
        print(f"Created product: {p_data['name']}")

    print(f"Successfully populated {Product.objects.count()} products across {Category.objects.count()} categories.")

if __name__ == '__main__':
    populate()
