from django.core.management.base import BaseCommand
from api.models import Category, Product

class Command(BaseCommand):
    help = 'Populate database with initial data from db-product-list.md'

    def handle(self, *args, **options):
        categories_data = {
            1: 'Smartphones',
            2: 'Headphones',
            3: 'Smart Watches',
            4: 'Laptops'
        }
        
        categories_objs = {}
        for cat_id, cat_name in categories_data.items():
            cat, created = Category.objects.get_or_create(id=cat_id, defaults={'name': cat_name})
            if not created and cat.name != cat_name:
                cat.name = cat_name
                cat.save()
            categories_objs[cat_id] = cat

        products = [
            # Category 1: Smartphones
            {
                'id': 1, 'categoryId': 1, 'price': 763903, 'count': 10,
                'name': 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
                'image': 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-large',
                'kaspi_link': 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
                'rating': 4.9, 'reviewCount': 937,
                'description': 'Флагманский смартфон с мощным чипом A19 Pro, экраном OLED Super Retina XDR 6.3", тройной камерой 48MP и поддержкой 5G.'
            },
            {
                'id': 2, 'categoryId': 1, 'price': 49990, 'count': 15,
                'name': 'Смартфон Redmi A5 4 ГБ/128 ГБ черный',
                'image': 'https://resources.cdn-kaspi.kz/img/m/p/p27/p8f/67214824.png?format=gallery-large',
                'kaspi_link': 'https://kaspi.kz/shop/p/redmi-a5-4-gb-128-gb-chernyi-137034687/?c=750000000',
                'rating': 4.9, 'reviewCount': 1135,
                'description': 'Мощный смартфон с процессором Unisoc T7250, экраном 6.88" IPS, емкой батареей 5200 мАч и основной камерой 32MP.'
            },
            {
                'id': 3, 'categoryId': 1, 'price': 66666, 'count': 20,
                'name': 'Смартфон Samsung Galaxy A07 6 ГБ/128 ГБ лавандовый',
                'image': 'https://resources.cdn-kaspi.kz/img/m/p/p0d/pdb/61291709.jpg?format=gallery-large',
                'kaspi_link': 'https://kaspi.kz/shop/p/samsung-galaxy-a07-6-gb-128-gb-lavandovyi-144817894/?c=750000000',
                'rating': 4.9, 'reviewCount': 541,
                'description': 'Универсальный смартфон с 6 ГБ RAM, 128 ГБ памяти, батареей 5000 мАч и экраном большого размера.'
            },
            {
                'id': 4, 'categoryId': 1, 'price': 490000, 'count': 12,
                'name': 'Смартфон Apple iPhone 16 128Gb черный',
                'image': 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
                'kaspi_link': 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000',
                'rating': 4.9, 'reviewCount': 1675,
                'description': 'Новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом.'
            },
            {
                'id': 5, 'categoryId': 1, 'price': 52900, 'count': 18,
                'name': 'Смартфон Redmi A3x 3 ГБ/64 ГБ черный',
                'image': 'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-medium',
                'kaspi_link': 'https://kaspi.kz/shop/p/redmi-a3x-3-gb-64-gb-chernyi-121654928/?c=750000000',
                'rating': 4.9, 'reviewCount': 1037,
                'description': 'Мощное устройство с высокой производительностью и стильным дизайном, процессор Unisoc Tiger T603.'
            },
            # Category 2: Headphones
            {
                'id': 6, 'categoryId': 2, 'price': 528, 'count': 30,
                'name': 'Наушники WIWU Earbuds 303 белый',
                'image': 'https://resources.cdn-kaspi.kz/img/m/p/p01/pf1/9210783.png?format=gallery-large',
                'kaspi_link': 'https://kaspi.kz/shop/p/naushniki-wiwu-earbuds-303-belyi-118287281/?c=750000000',
                'rating': 4.4, 'reviewCount': 404,
                'description': 'Универсальные наушники с USB Type-C разъемом, встроенным микрофоном и отличной звукоизоляцией.'
            },
            {
                'id': 7, 'categoryId': 2, 'price': 10673, 'count': 25,
                'name': 'Наушники Apple EarPods USB-C белый',
                'image': 'https://resources.cdn-kaspi.kz/img/m/p/p44/p27/108964604.png?format=gallery-large',
                'kaspi_link': 'https://kaspi.kz/shop/p/naushniki-apple-earpods-usb-c-belyi-114086432/?c=750000000',
                'rating': 4.9, 'reviewCount': 3150,
                'description': 'Классические наушники Apple с USB Type-C, встроенным микрофоном и универсальной совместимостью.'
            },
            {
                'id': 8, 'categoryId': 2, 'price': 3490, 'count': 12,
                'name': 'Наушники JASPER JS70 бежевый',
                'image': 'https://resources.cdn-kaspi.kz/img/m/p/pa8/p4f/66068562.jpg?format=gallery-large',
                'kaspi_link': 'https://kaspi.kz/shop/p/naushniki-jasper-js70-bezhevyi-146025818/?c=750000000',
                'rating': 5.0, 'reviewCount': 229,
                'description': 'Беспроводные наушники с Bluetooth, временем работы до 6 часов, глубокими басами.'
            },
            {
                'id': 9, 'categoryId': 2, 'price': 15500, 'count': 10,
                'name': 'Наушники Razer Blackshark V2 X черный',
                'image': 'https://resources.cdn-kaspi.kz/img/m/p/h21/h98/64136271331358.jpg?format=gallery-medium',
                'kaspi_link': 'https://kaspi.kz/shop/p/naushniki-razer-blackshark-v2-x-chernyi-100934284/?c=750000000',
                'rating': 4.8, 'reviewCount': 394,
                'description': 'Игровая гарнитура закрытого типа с отличным звуком и микрофоном.'
            },
            {
                'id': 10, 'categoryId': 2, 'price': 18900, 'count': 15,
                'name': 'Наушники Marshall Major IV черный',
                'image': 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium',
                'kaspi_link': 'https://kaspi.kz/shop/p/naushniki-marshall-major-iv-chernyi-102138144/?c=750000000',
                'rating': 4.9, 'reviewCount': 2647,
                'description': 'Bluetooth гарнитура с динамическими излучателями 40 мм и до 80 часов воспроизведения.'
            },
            # Category 3: Smart Watches
            {
                'id': 11, 'categoryId': 3, 'price': 29888, 'count': 18,
                'name': 'Смарт-часы YUNTEKO DMi50 графитовый-черный',
                'image': 'https://resources.cdn-kaspi.kz/img/m/p/p64/p52/58332179.jpg?format=gallery-large',
                'kaspi_link': 'https://kaspi.kz/shop/p/yunteko-dmi50-grafitovyi-chernyi-112844424/?c=750000000',
                'rating': 4.9, 'reviewCount': 598,
                'description': 'Смарт-часы с батареей 400mAh, водозащитой IP68 и стильным дизайном.'
            },
            {
                'id': 12, 'categoryId': 3, 'price': 19990, 'count': 22,
                'name': 'Смарт-часы YAMI i1 42 мм золотистый',
                'image': 'https://resources.cdn-kaspi.kz/img/m/p/p51/pd4/9015777.jpg?format=gallery-large',
                'kaspi_link': 'https://kaspi.kz/shop/p/yami-i1-42-mm-zolotistyi-zolotistyi-112674629/?c=750000000',
                'rating': 4.9, 'reviewCount': 663,
                'description': 'Инновационный гаджет, объединяющий функции умных часов и фитнес-браслета.'
            },
            {
                'id': 13, 'categoryId': 3, 'price': 9990, 'count': 14,
                'name': 'Смарт-часы ARTEO AS10 41 мм розовый',
                'image': 'https://resources.cdn-kaspi.kz/img/m/p/p0c/p4d/82291138.png?format=gallery-large',
                'kaspi_link': 'https://kaspi.kz/shop/p/arteo-as10-41-mm-rozovyi-129639580/?c=750000000',
                'rating': 5.0, 'reviewCount': 477,
                'description': 'Стильные смарт-часы с современным дизайном и мониторингом здоровья.'
            },
            {
                'id': 14, 'categoryId': 3, 'price': 29900, 'count': 10,
                'name': 'Смарт-часы NOLIMIT REDLINE черный',
                'image': 'https://resources.cdn-kaspi.kz/img/m/p/p6d/p33/88870604.jpeg?format=gallery-large',
                'kaspi_link': 'https://kaspi.kz/shop/p/smart-chasy-nolimit-redline-chernyi-141361891/?c=750000000',
                'rating': 5.0, 'reviewCount': 267,
                'description': 'Надежные смарт-часы с AMOLED дисплеем 1.43", водозащитой IP67 и GPS-трекингом.'
            },
            {
                'id': 15, 'categoryId': 3, 'price': 45000, 'count': 5,
                'name': 'Смарт-часы Samsung Galaxy Watch 6',
                'image': 'https://resources.cdn-kaspi.kz/img/m/p/p0c/p4d/82291138.png?format=gallery-large',
                'kaspi_link': 'https://kaspi.kz/shop/p/samsung-galaxy-watch6-40mm-zolotistyi-112684868/?c=750000000',
                'rating': 4.8, 'reviewCount': 120,
                'description': 'Продвинутые смарт-часы с широким набором функций для здоровья и фитнеса.'
            },
            # Category 4: Laptops
            {
                'id': 16, 'categoryId': 4, 'price': 249900, 'count': 8,
                'name': 'Ноутбук Castom E157D 15.6"',
                'image': 'https://resources.cdn-kaspi.kz/img/m/p/p32/pf7/64711809.jpg?format=gallery-medium',
                'kaspi_link': 'https://kaspi.kz/shop/p/castom-e157d-15-6-16-gb-ssd-1000-gb-win-11-101725124/?c=750000000',
                'rating': 4.7, 'reviewCount': 255,
                'description': 'Универсальный ноутбук с процессором AMD Ryzen 5, 16 Гб RAM и SSD 1000 Гб.'
            },
            {
                'id': 17, 'categoryId': 4, 'price': 193500, 'count': 12,
                'name': 'Ноутбук Biraz EVO N95 15.6"',
                'image': 'https://resources.cdn-kaspi.kz/img/m/p/p71/pf6/41734529.png?format=gallery-medium',
                'kaspi_link': 'https://kaspi.kz/shop/p/biraz-evo-n95-15-6-16-gb-ssd-512-gb-win-11-brz-evo-n95-139514916/?c=750000000',
                'rating': 4.6, 'reviewCount': 199,
                'description': 'Современное решение для повседневных задач, процессор Intel N95, 16 ГБ RAM, SSD 512 ГБ.'
            },
            {
                'id': 18, 'categoryId': 4, 'price': 520781, 'count': 5,
                'name': 'Ноутбук Apple MacBook Air 13 2025',
                'image': 'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
                'kaspi_link': 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000',
                'rating': 5.0, 'reviewCount': 122,
                'description': 'Ультрабук с процессором Apple M4, 16 Гб RAM и SSD 256 Гб.'
            },
            {
                'id': 19, 'categoryId': 4, 'price': 496000, 'count': 7,
                'name': 'Ноутбук ThundeRobot 911S Core D',
                'image': 'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium',
                'kaspi_link': 'https://kaspi.kz/shop/p/thunderobot-911s-core-d-15-6-16-gb-ssd-512-gb-bez-os-jt009k00f-117046774/?c=750000000',
                'rating': 4.8, 'reviewCount': 400,
                'description': 'Игровой ноутбук с видеокартой GeForce RTX 3050 и процессором Intel Core i5-12450H.'
            },
            {
                'id': 20, 'categoryId': 4, 'price': 439982, 'count': 6,
                'name': 'Ноутбук Apple MacBook Air 13 2020',
                'image': 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
                'kaspi_link': 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
                'rating': 4.9, 'reviewCount': 584,
                'description': 'Популярная модель на чипе Apple M1, 8 Гб RAM и SSD 256 Гб.'
            }
        ]

        for p_data in products:
            category = categories_objs[p_data['categoryId']]
            Product.objects.update_or_create(
                id=p_data['id'],
                defaults={
                    'name': p_data['name'],
                    'price': p_data['price'],
                    'description': p_data['description'],
                    'count': p_data['count'],
                    'image': p_data['image'],
                    'kaspi_link': p_data['kaspi_link'],
                    'rating': p_data['rating'],
                    'reviewCount': p_data['reviewCount'],
                    'category': category
                }
            )

        self.stdout.write(self.style.SUCCESS('Database populated with complete data, images, links, ratings successfully!'))
