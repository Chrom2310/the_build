import dom from '../pages/mock/7200_Domination.png';
import electr from '../pages/mock/Electrocute.png';
import taste from '../pages/mock/GreenTerror_TasteOfBlood.png';
import eye from '../pages/mock/EyeballCollection.png';
import ulti from '../pages/mock/UltimateHunter.png';
import cheap from '../pages/mock/CheapShot.png';
import dark from '../pages/mock/DarkHarvest.png';
import ghost from '../pages/mock/GhostPoro.png';
import hail from '../pages/mock/HailOfBlades.png';
import hunter from '../pages/mock/IngeniousHunter.png';
import predator from '../pages/mock/Predator.png';
import relent from '../pages/mock/RelentlessHunter.png';
import sudden from '../pages/mock/SuddenImpact.png';
import treasure from '../pages/mock/TreasureHunter.png';
import zombie from '../pages/mock/TreasureHunter.png';

import sorcery from '../pages/mock/7202_Sorcery.png';
import mana from '../pages/mock/ManaflowBand.png';
import tranc from '../pages/mock/Transcendence.png';
import absolute from '../pages/mock/AbsoluteFocus.png';
import arcane from '../pages/mock/ArcaneComet.png';
import calerity from '../pages/mock/CelerityTemp.png';
import storm from '../pages/mock/GatheringStorm.png';
import nimbus from '../pages/mock/6361.png';
import pokes from '../pages/mock/Pokeshield.png';
import rush from '../pages/mock/PhaseRush.png';
import scorch from '../pages/mock/Scorch.png';
import summon from '../pages/mock/SummonAery.png';
import water from '../pages/mock/Waterwalking.png';

const runes = [
    {
        "id": 8100,
        "key": "Domination",
        "icon": dom, //"perk-images/Styles/7200_Domination.png"
        "name": "Доминирование",
        "slots": [
            {
                "runes": [
                    {
                        "id": 8112,
                        "key": "Electrocute",
                        "icon": electr,
                        "name": "Казнь электричеством",
                        "shortDesc": "Наносит дополнительный <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'>адаптивный урон</lol-uikit-tooltipped-keyword>, если вы поражаете врага 3 <b>отдельными</b> атаками или умениями в течение 3 сек.",
                        "longDesc": "Наносит дополнительный <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'><font color='#48C4B7'>адаптивный урон</font></lol-uikit-tooltipped-keyword>, если вы поражаете врага 3 <b>отдельными</b> атаками или умениями в течение 3 сек.<br><br>Урон: 30-180 (+0.4 от дополнительной силы атаки, +0.25 от силы умений).<br><br>Перезарядка: 25-20 сек.<br><br><hr><i>''Мы зовем их повелителями грома, ибо упомянув их молнии, можно накликать катастрофу''.</i>"
                    },
                    {
                        "id": 8124,
                        "key": "Predator",
                        "icon": predator,
                        "name": "Хищник",
                        "shortDesc": "У ваших ботинок появляется активный эффект, который значительно увеличивает <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>скорость передвижения</lol-uikit-tooltipped-keyword>, а также усиливает вашу следующую атаку или умение, благодаря чему они наносят дополнительный <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'>адаптивный урон.</lol-uikit-tooltipped-keyword>",
                        "longDesc": "Зачаровывает ваши ботинки активным эффектом <font color='#c60300'>Хищник</font>.<br><br>При погоне за вражескими чемпионами ваша скорость передвижения увеличивается на 25-50% в течение 1 сек. После разгона атаки и умения, наносящие урон чемпионам, прерывают действие эффекта, а также наносят 20-180 (+<scaleAD>25%</scaleAD> от дополнительной силы атаки) (+<scaleAP>15%</scaleAP> от силы умений) дополнительного <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'><font color='#48C4B7'>адаптивного урона</font></lol-uikit-tooltipped-keyword>.<br><br>Перезарядка: 120-60 сек."
                    },
                    {
                        "id": 8128,
                        "key": "DarkHarvest",
                        "icon": dark,
                        "name": "Темная жатва",
                        "shortDesc": "При нанесении урона чемпиону с низким уровнем здоровья вы дополнительно наносите ему <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'>адаптивный урон</lol-uikit-tooltipped-keyword> и пожинаете его душу.",
                        "longDesc": "При нанесении урона чемпиону, уровень здоровья которого ниже 50%, вы дополнительно наносите <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'>адаптивный урон</lol-uikit-tooltipped-keyword>. Кроме того, вы пожинаете его душу, навсегда увеличивая урон, который наносит Темная жатва, на 5.<br><br>Урон, который наносит Темная жатва: 20-60 (в зависимости от уровня) (+5 урона за каждую душу) (+0.25 от дополнительной силы атаки) (+0.15 от силы умений)<br>Перезарядка: 45 сек. (сбрасывается до 1.5 сек. при убийстве или содействии)"
                    },
                    {
                        "id": 9923,
                        "key": "HailOfBlades",
                        "icon": hail,
                        "name": "Град клинков",
                        "shortDesc": "Значительно увеличивает скорость атаки первых 3 автоатак против вражеских чемпионов.",
                        "longDesc": "Атакуя вражеских чемпионов, вы увеличиваете свою скорость атаки на 110%. Эффект действует в течение 3 автоатак.<br><br>Эффект заканчивается, если во время его действия между атаками проходит более 3 сек.<br><br>Перезарядка: 12 сек.<br><br><rules>Сброшенные автоатаки увеличивают количество допустимых усиленных атак на 1.<br>Позволяет временно превысить предел скорости атаки.</rules>"
                    }
                ]
            },
            {
                "runes": [
                    {
                        "id": 8126,
                        "key": "CheapShot",
                        "icon": cheap,
                        "name": "Грязный прием",
                        "shortDesc": "Наносит дополнительный чистый урон вражеским чемпионам, которые <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_ImpairAct'>ограничены в передвижении или выполнении действий</lol-uikit-tooltipped-keyword>. ",
                        "longDesc": "Нанося урон чемпионам, которые <b>ограничены в передвижении или выполнении действий</b>, вы дополнительно наносите им 10-45 чистого урона (в зависимости от уровня).<br><br>Перезарядка: 4 сек.<br><rules>Распространяется на урон, который наносится после окончания ограничения.</rules>"
                    },
                    {
                        "id": 8139,
                        "key": "TasteOfBlood",
                        "icon": taste,
                        "name": "Вкус крови",
                        "shortDesc": "Восстанавливает здоровье, когда вы наносите урон вражескому чемпиону.",
                        "longDesc": "При нанесении урона вражескому чемпиону вы восстанавливаете себе здоровье.<br><br>Лечение: 16-30 (+0.15 от дополнительной силы атаки, +0.08 от силы умений) здоровья (в зависимости от уровня)<br><br>Перезарядка: 20 сек."
                    },
                    {
                        "id": 8143,
                        "key": "SuddenImpact",
                        "icon": sudden,
                        "name": "Внезапный удар",
                        "shortDesc": "После прыжка, рывка, телепортации или выхода из скрытности ваши смертоносность и магическое пробивание ненадолго увеличиваются.",
                        "longDesc": "При нанесении любого урона чемпиону после прыжка, рывка, телепортации или выхода из скрытности ваша смертоносность увеличивается на 9, а магическое пробивание - на 7 на 5 сек.<br><br>Перезарядка: 4 сек."
                    }
                ]
            },
            {
                "runes": [
                    {
                        "id": 8136,
                        "key": "ZombieWard",
                        "icon": zombie,
                        "name": "Тотем-зомби",
                        "shortDesc": "При каждом <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>добивании</lol-uikit-tooltipped-keyword> вражеского тотема на его месте появляется дружественный Тотем-зомби. Навсегда увеличивает силу атаки или силу умений (<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>адаптивно</lol-uikit-tooltipped-keyword>) за каждый поднятый Тотем-зомби, а также при накоплении максимального количества зарядов.",
                        "longDesc": "При каждом <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>добивании</lol-uikit-tooltipped-keyword> вражеского тотема на его месте появляется дружественный Тотем-зомби. <br><br>Дает 1.2 силы атаки или 2 силы умений (<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>адаптивно</font></lol-uikit-tooltipped-keyword>) за каждый поднятый Тотем-зомби - вплоть до 10.<br><br>После появления 10 Тотемов-зомби дополнительно дает 10 адаптивной силы.<br><br>Тотемы-зомби видимы для всех, существуют в течение 120 сек. и не учитываются в ограничении на количество одновременно существующих тотемов."
                    },
                    {
                        "id": 8120,
                        "key": "GhostPoro",
                        "icon": ghost,
                        "name": "Призрачный поро",
                        "shortDesc": "Когда заканчивается время действия вашего тотема, на его месте появляется Призрачный поро, который обеспечивает обзор, пока его не обнаружат. Навсегда увеличивает силу атаки или силу умений (<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>адаптивно</lol-uikit-tooltipped-keyword>) за каждого призванного Призрачного поро, а также когда Призрачный поро обнаруживает вражеского чемпиона. Кроме того, увеличивает силу атаки или силу умений при накоплении максимального количества зарядов.",
                        "longDesc": "Когда заканчивается время действия вашего тотема, на его месте появляется Призрачный поро, который обеспечивает обзор в течение 90 сек. При обнаружении вражескими чемпионами Призрачный поро пугается и убегает.<br><br>Дает 1.2 силы атаки или 2 силы умений (<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>адаптивно</font></lol-uikit-tooltipped-keyword>) за каждого призванного Призрачного поро, а также когда Призрачный поро обнаруживает вражеского чемпиона - вплоть до 10 зарядов. <br><br>При накоплении 10 зарядов дополнительно дает 10 адаптивной силы."
                    },
                    {
                        "id": 8138,
                        "key": "EyeballCollection",
                        "icon": eye,
                        "name": "Коллекция глаз",
                        "shortDesc": "Вы получаете глаза за <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>добивания</lol-uikit-tooltipped-keyword> чемпионов. За каждый собранный глаз вы навсегда получаете силу атаки или силу умений (<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>адаптивно</lol-uikit-tooltipped-keyword>). После сбора полной коллекции эти показатели увеличиваются еще сильнее.",
                        "longDesc": "Вы получаете глаза за добивания чемпионов. Каждый глаз дает вам 1.2 силы атаки или 2 силы умений (<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>адаптивно</font></lol-uikit-tooltipped-keyword>). <br><br>Собрав полную коллекцию из 10 глаз, вы также получаете 6 силы атаки или 10 силы умений (<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>адаптивно</font></lol-uikit-tooltipped-keyword>).<br><br>Вы получаете следующее количество глаз за убийство чемпиона или содействие: 1."
                    }
                ]
            },
            {
                "runes": [
                    {
                        "id": 8135,
                        "key": "TreasureHunter",
                        "icon": treasure,
                        "name": "Охотник за сокровищами",
                        "shortDesc": "<b>Уникальные</b> <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>участия в убийствах</lol-uikit-tooltipped-keyword> дают дополнительное золото. ",
                        "longDesc": "При получении зарядов <i>Охотника за головами</i> вы дополнительно зарабатываете <gold>70 золота</gold>. Количество получаемого золота увеличивается на <gold>20</gold> за каждый заряд <i>Охотника за головами</i> (вплоть до <gold>150</gold>).<br><br>Вы получаете заряды <i>Охотника за головами</i> за участия в убийствах вражеских чемпионов (по одному заряду на врага)."
                    },
                    {
                        "id": 8134,
                        "key": "IngeniousHunter",
                        "icon": hunter,
                        "name": "Изобретательный охотник",
                        "shortDesc": "<b>Уникальные</b> <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>добивания</lol-uikit-tooltipped-keyword> навсегда увеличивают <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>ускорение</lol-uikit-tooltipped-keyword> предметов (включая аксессуары).",
                        "longDesc": "Дает <attention>20</attention> <b>ускорения предметов</b> плюс еще <attention>6</attention> <b>ускорения предметов</b> за каждый заряд <i>Охотника за головами</i> (включая аксессуары).<br><br>Вы получаете заряды <i>Охотника за головами</i> за первое добивание каждого вражеского чемпиона (по одному заряду на врага).<br><br><rules>Ускорение предметов действует на все предметы, у которых есть перезарядка. </rules>"
                    },
                    {
                        "id": 8105,
                        "key": "RelentlessHunter",
                        "icon": relent,
                        "name": "Беспощадный охотник",
                        "shortDesc": "<b>Уникальные</b> <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>добивания</lol-uikit-tooltipped-keyword> навсегда увеличивают <b><lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>скорость передвижения</lol-uikit-tooltipped-keyword> вне боя</b>. ",
                        "longDesc": "Увеличивает <speed>скорость передвижения</speed> вне боя на <speed>5</speed> плюс <speed>8</speed> за каждый заряд <i>Охотника за головами</i>.<br><br>Вы получаете заряды <i>Охотника за головами</i> за первое добивание каждого вражеского чемпиона (по одному заряду на врага)."
                    },
                    {
                        "id": 8106,
                        "key": "UltimateHunter",
                        "icon": ulti,
                        "name": "Абсолютный охотник",
                        "shortDesc": "<b>Уникальные</b> <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>добивания</lol-uikit-tooltipped-keyword> навсегда сокращают перезарядку вашего абсолютного умения. ",
                        "longDesc": "Перезарядка вашего абсолютного умения сокращается на величину, равную <attention>6</attention> ускорения умений плюс <attention>5</attention> ускорения умений за каждый заряд <i>Охотника за головами</i>.<br><br>Вы получаете заряды <i>Охотника за головами</i> за первое добивание каждого вражеского чемпиона (по одному заряду на врага)."
                    }
                ]
            }
        ]
    },
    {
        "id": 8200,
        "key": "Sorcery",
        "icon": sorcery,  //"perk-images/Styles/7202_Sorcery.png"
        "name": "Колдовство",
        "slots": [
            {
                "runes": [
                    {
                        "id": 8214,
                        "key": "SummonAery",
                        "icon": summon,
                        "name": "Призыв Пушинки",
                        "shortDesc": "Ваши автоатаки и умения направляют Пушинку к цели: она наносит урон врагам или накладывает щит на союзников.",
                        "longDesc": "При нанесении урона вражеским чемпионам с помощью автоатак или умений вы посылаете к ним Пушинку, которая наносит 10-40 в зависимости от уровня (+<scaleAP>0.1 от силы умений</scaleAP>) (+<scaleAD>0.15 от дополнительной силы атаки</scaleAD>).<br><br>При усилении или защите союзников с помощью умений вы посылаете к ним Пушинку, накладывая щит прочностью 30-75 в зависимости от уровня (+<scaleAP>0.22 от силы умений</scaleAP>) (+<scaleAD>0.35 от дополнительной силы атаки</scaleAD>).<br><br>Пушинку нельзя послать снова, пока она не вернется к вам."
                    },
                    {
                        "id": 8229,
                        "key": "ArcaneComet",
                        "icon": arcane,
                        "name": "Магическая комета",
                        "shortDesc": "Когда вы наносите урон умением чемпиону, туда, где он находится, падает комета, которая наносит урон.",
                        "longDesc": "Когда вы наносите чемпиону урон умением, туда, где он находится, падает комета. Если при нанесении урона Магическая комета находится на перезарядке, оставшееся время перезарядки сокращается.<br><br><lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'><font color='#48C4B7'>Адаптивный урон</font></lol-uikit-tooltipped-keyword>: 30-100 в зависимости от уровня (<scaleAP>+0.2 от силы умений</scaleAP> и <scaleAD>+0.35 от дополнительной силы атаки</scaleAD>)<br>Перезарядка: 20-8 сек.<br><rules><br>Сокращение перезарядки<br>От умений против одной цели: 20%.<br>От эффектов, действующих по площади: 10%.<br>От периодических эффектов: 5%.<br></rules>"
                    },
                    {
                        "id": 8230,
                        "key": "PhaseRush",
                        "icon": rush,
                        "name": "Фазовый рывок",
                        "shortDesc": "Поражая вражеского чемпиона 3 <b>отдельными</b> атаками или умениями, вы кратковременно увеличиваете свою <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>скорость передвижения</lol-uikit-tooltipped-keyword>. ",
                        "longDesc": "При поражении вражеского чемпиона 3 атаками или <b>отдельными</b> умениями в течение 4 сек. ваша <speed>скорость передвижения</speed> увеличивается на <speed>15-40%</speed> в зависимости от уровня и вы получаете 75% устойчивости к замедлению. <hr>Скорость передвижения чемпионов ближнего боя увеличивается на 30-60%.<hr>Продолжительность: 3 сек.<br>Перезарядка: 30-10 сек."
                    }
                ]
            },
            {
                "runes": [
                    {
                        "id": 8224,
                        "key": "NullifyingOrb",
                        "icon": pokes,
                        "name": "Сфера уничтожения",
                        "shortDesc": "Если после получения магического урона у вас остается мало здоровья, вы получаете щит от магического урона.",
                        "longDesc": "При получении магического урона, после которого ваш уровень здоровья опускается ниже 30%, вы получаете щит, поглощающий магический урон в размере 35-110 в зависимости от уровня (<scaleAP>+0.09 от силы умений</scaleAP> и <scaleAD>+0.14 от дополнительной силы атаки</scaleAD>) в течение 4 сек.<br><br>Перезарядка: 60 сек."
                    },
                    {
                        "id": 8226,
                        "key": "ManaflowBand",
                        "icon": mana,
                        "name": "Поток маны",
                        "shortDesc": "Поражение вражеского чемпиона умением навсегда увеличивает ваш максимальный запас маны на 25 (вплоть до 250 маны).<br><br>После получения 250 дополнительной маны восстанавливает 1% от вашей недостающей маны каждые 5 сек.",
                        "longDesc": "Поражение вражеского чемпиона умением навсегда увеличивает ваш максимальный запас маны на 25 (вплоть до 250 маны).<br><br>После получения 250 дополнительной маны восстанавливает 1% от вашей недостающей маны каждые 5 сек.<br><br>Перезарядка: 15 сек."
                    },
                    {
                        "id": 8275,
                        "key": "NimbusCloak",
                        "icon": nimbus,
                        "name": "Сияющий плащ",
                        "shortDesc": "После применения заклинания призывателя ваша <speed>скорость передвижения</speed> ненадолго увеличивается и вы получаете способность проходить сквозь бойцов.",
                        "longDesc": "После применения заклинания призывателя ваша <speed>скорость передвижения</speed> увеличивается на 2 сек. и вы получаете способность проходить сквозь бойцов.<br><br>Увеличение: <speed>5-25% скорости передвижения</speed> в зависимости от перезарядки заклинания призывателя. (Чем выше перезарядка, тем сильнее ускорение.) "
                    }
                ]
            },
            {
                "runes": [
                    {
                        "id": 8210,
                        "key": "Transcendence",
                        "icon": tranc,
                        "name": "Превосходство",
                        "shortDesc": "При получении следующих уровней вы получаете бонусы:<br>Уровень 5: +5 <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>ускорения умений</lol-uikit-tooltipped-keyword> <br>Уровень 8: +5 <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>ускорения умений</lol-uikit-tooltipped-keyword> <br>Уровень 11: каждое участие в убийстве чемпиона сокращает оставшуюся перезарядку базовых умений на 20%.",
                        "longDesc": "При получении следующих уровней вы получаете бонусы:<br>Уровень 5: +5 <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>ускорения умений</lol-uikit-tooltipped-keyword> <br>Уровень 8: +5 <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>ускорения умений</lol-uikit-tooltipped-keyword> <br>Уровень 11: каждое участие в убийстве чемпиона сокращает оставшуюся перезарядку базовых умений на 20%.<br>"
                    },
                    {
                        "id": 8234,
                        "key": "Celerity",
                        "icon": calerity,
                        "name": "Быстрота",
                        "shortDesc": "Все действующие на вас прибавки к <speed>скорости передвижения</speed> становятся на 7% эффективнее, а ваша <speed>скорость передвижения</speed> увеличивается на <speed>1%</speed>.",
                        "longDesc": "Все действующие на вас прибавки к <speed>скорости передвижения</speed> становятся на 7% эффективнее, а ваша <speed>скорость передвижения</speed> увеличивается на <speed>1%</speed>."
                    },
                    {
                        "id": 8233,
                        "key": "AbsoluteFocus",
                        "icon": absolute,
                        "name": "Полная сосредоточенность",
                        "shortDesc": "Когда уровень вашего здоровья выше 70%, вы наносите дополнительный <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'>адаптивный урон</lol-uikit-tooltipped-keyword>.",
                        "longDesc": "Когда уровень вашего здоровья выше 70%, вы получаете до 18 силы атаки или 30 силы умений (<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>адаптивно</font></lol-uikit-tooltipped-keyword>) (в зависимости от уровня).<br><br>Увеличивает силу атаки на 1.8 или силу умений на 3 на 1-м уровне."
                    }
                ]
            },
            {
                "runes": [
                    {
                        "id": 8237,
                        "key": "Scorch",
                        "icon": scorch,
                        "name": "Ожог",
                        "shortDesc": "Каждые 10 сек. ваше первое попадание умением обжигает чемпионов.",
                        "longDesc": "При следующем попадании умением по чемпиону ваша цель воспламеняется и дополнительно получает 20-40 магического урона в зависимости от уровня через 1 сек.<br><br>Перезарядка: 10 сек."
                    },
                    {
                        "id": 8232,
                        "key": "Waterwalking",
                        "icon": water,
                        "name": "Хождение по воде",
                        "shortDesc": "Увеличивает <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>скорость передвижения</lol-uikit-tooltipped-keyword>, а также силу умений или силу атаки (<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>адаптивно</lol-uikit-tooltipped-keyword>), когда вы находитесь на реке.",
                        "longDesc": "Дает <speed>25 скорости передвижения</speed> и до 18 силы атаки или 30 силы умений (<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>адаптивно</font></lol-uikit-tooltipped-keyword>) (в зависимости от уровня), когда вы находитесь на реке.<br><br><hr><br><i>Пусть же вы будете быстры, как журчащая река, и проворны, как пугливый краб.</i><br>"
                    },
                    {
                        "id": 8236,
                        "key": "GatheringStorm",
                        "icon": storm,
                        "name": "Надвигающаяся буря",
                        "shortDesc": "По ходу игры вы получаете растущие прибавки к силе атаки или силе умений (<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>адаптивно</lol-uikit-tooltipped-keyword>).",
                        "longDesc": "Раз в 10 мин. вы получаете силу умений или силу атаки (<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>адаптивно</font></lol-uikit-tooltipped-keyword>).<br><br><i>10 минут</i>: +8 силы умений или +5 силы атаки <br><i>20 минут</i>: +24 силы умений или +14 силы атаки<br><i>30 минут</i>: +48 силы умений или +29 силы атаки<br><i>40 минут</i>: +80 силы умений или +48 силы атаки<br><i>50 минут</i>: +120 силы умений или +72 силы атаки<br><i>60 минут</i>: +168 силы умений или +101 силы атаки<br>И т.д."
                    }
                ]
            }
        ]
    }
]

export default runes;