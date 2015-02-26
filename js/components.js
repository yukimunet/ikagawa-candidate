riot.tag('app-events', '<section> <article each="{ props }"> <h3><fa icon="bullhorn"></fa>{ title }</h3> <time datetime="{ start }">{ startJa }</time> <span><fa icon="map-marker"></fa>{ location }</span> </article> </section>', 'app-events { display: block; padding: 1em 0; } app-events section { margin: 0 auto; text-align: left; } app-events article { text-align: left; position: relative; margin: 1em 0; padding-left: 100px; } app-events h3 { font-size: 110%; font-weight: normal; margin: 0 0 .7em; } app-events h3 fa { font-size: 1.7em; width: 2em; height: 2em; line-height: 2em; text-align: center; color: white; background: #7992A7; position: absolute; left: .8em; top: 0; } app-events time { font-size: 90%; display: block; margin-bottom: .3em; color: #666; } app-events span { display: block; font-size: 85%; color: #666; } app-events span fa { color: #E33247; font-size: 120%; margin-right: .3em; } @media (min-width: 500px) { app-events { padding: 1em 2em; } app-events section { max-width: 700px; } app-events article { display: inline-block; width: 250px; } }', function(opts) {
    var DAY_OF_WEEK = ['日', '月', '火', '水', '木', '金', '土']
    var FORMAT = function(s){
      function pad (n) { return (n < 10 ? '0' : '') + n }
      var d = new Date(s)
      return d.getFullYear() + '/' + d.getMonth() + '/' + d.getDate() + '(' + DAY_OF_WEEK[d.getDay()] + ') ' +
             d.getHours() + ':' + pad(d.getMinutes())
    }

    this.props = opts.props.map(function(s){
      return {
        title:    s.title,
        location: s.location,
        start:    s.start,
        startJa:  FORMAT(s.start)
      }
    })
  
});

riot.tag('app-footer', '<p>{ props.copyrights }</p>', 'app-footer { display: block; background: #656363!important; color: white; padding: 2em 0; } app-footer p { padding: 0 1em; margin: 0 auto; font-size: 80%; max-width: 25em; }', function(opts) {
    this.props = opts.props
  
});

riot.tag('app-hero', '<section class="cover"></section> <header> <span>{ props.title }</span> <h1>{ props.name }</h1> <h2>{ props.kana }</h2> <ul> <li each="{ props.links }"><a href="{ url }"><fa icon="{ icon }"></fa></a></li> </ul> </header> <h3>{ props.copy }</h3> <div> <p>{ props.desc }</p> </div>', 'app-hero { display: block } app-hero .cover { position: absolute; z-index: -1; top: 0; width: 100%; height: 320px; background-size: cover; background-image: url(images/photo.jpg); background-position: center; } app-hero header { margin: 280px 8% 0; padding: 1.3em 2em 1.5em; position: relative; } app-hero header:before,app-hero header:after { content: \'*\'; color: transparent; background: white; position: absolute; border-top-left-radius: 5px; border-top-right-radius: 5px; top: 0; left: 0; right: 0; bottom: 0; z-index: -1; } app-hero header:before { bottom: 1em; box-shadow: 0 0 5px rgba(0,0,0,.5); background: transparent; } app-hero header span { padding: .5em 1em .3em; background: rgba(0,0,0,.5); color: white; font-size: 80%; border-radius: 2px; } app-hero h1 { font-weight: normal; font-size: 150%; margin: .5em 0; } app-hero h2 { font-weight: normal; font-size: 90%; margin: 0; } app-hero h3 { background: #FA7373; color: white; font-size: 100%; font-weight: normal; margin: 0; padding: 1em 0 .7em; line-height: 1em; box-shadow: 0 0 2px rgba(0,0,0,.3); position: absolute; left: 0; right: 0; } app-hero div { background: white; margin: 2.5em 0 0; } app-hero p { margin: 0 auto; padding: 1.3em 2em; text-align: left; max-width: 700px; } app-hero ul { padding: 0; margin: 1.5em 0 .2em; } app-hero li { display: inline-block } app-hero li a { display: block } app-hero fa { width: 1.8em; height: 1.8em; border-radius: .9em; color: white; line-height: 1.8em; font-size: 130%; margin: 0 .3em; overflow: none; background: #42729A; text-align: center; } app-hero fa[icon=twitter] { background: #55ACEE } app-hero fa[icon=facebook] { background: #415E9B } @media (min-width: 500px) { app-hero header { text-align: left; margin-left: 12%; margin-right: 12%; } app-hero header:after { background: rgba(255,255,255,.95) } app-hero ul { position: absolute; right: 1.5em; top: 2em; margin: 0; } app-hero .cover { height: 480px } } @media (min-width: 750px) { app-hero header { width: 550px; margin-left: auto; margin-right: auto; } } @media (min-width: 1000px) { app-hero .cover { height: 560px } app-hero header { margin-top: 380px } }', function(opts) {
    this.props = opts.props
    this.props.links = this.props.links.map(function(url){
      return {
        icon: /^https:\/\/twitter.com/.test(url) ? 'twitter'
            : /^https:\/\/www.facebook.com/.test(url) ? 'facebook'
            : 'globe',
        url: url
      }
    })
  
});

riot.tag('app-manifest', '<article each="{ props }"> <h3>{ title }</h3> <p>{ desc }</p> </article>', 'app-manifest { display: block; counter-reset: manifest; padding: 1em 0; } app-manifest article { overflow: hidden; margin: 0; padding: 0; white-space: nowrap; text-align: left; position: relative; margin: .5em 0; } app-manifest h3 { width: 75%; margin: 0; padding: 0 5% 0 20%; display: inline-block; font-size: 100%; font-weight: normal; white-space: normal; vertical-align: middle; } app-manifest h3:before { content: counter(manifest); counter-increment: manifest; position: absolute; top: 50%; margin-top: -.9em; right: 83%; width: 2em; height: 2em; line-height: 2em; font-size: 120%; border-radius: 1em; text-align: center; background: #55ACEE; color: white; vertical-align: middle; } app-manifest h3:after { content: \'\\25BA\'; position: absolute; right: 1em; top: 50%; margin-top: -.5em; line-height: 1em; color: #ccc; font-size: 60%; } app-manifest p { width: 100%; display: inline-block; font-size: 92%; } @media (min-width: 500px) { app-manifest { white-space: nowrap; overflow-x: scroll; width: 100%; } app-manifest article { display: inline-block; width: 14em; margin: 1.5em; } app-manifest h3 { display: block; padding: 0 0 1em; margin: 4em 0 1em; width: auto; border-bottom: 1px solid #ddd; } app-manifest p { display: block; white-space: normal; } app-manifest h3:before { top: 0; margin-top: 0; left: 50%; margin-left: -1em; } app-manifest h3:after { display: none } }', function(opts) {
    this.props = opts.props
  
});

riot.tag('app-profile', '<section> <div> <h3>{ props.title }</h3> <ul> <li each="{ props.records }"><time>{ year }</time>{ desc }</li> </ul> </div> <figure> <figcaption> { props.message } </figcaption> <img riot-src="{ props.photo }"> </figure> </section>', 'app-profile { display: block; background: #55ACEE!important; color: white; padding: 2.2em 0; position: relative; overflow: auto; zoom: 1; } app-profile section { max-width: 700px; margin: 0 auto; position: relative; } app-profile h3 { font-size: 100%; font-weight: normal; margin: 0; } app-profile ul { margin: 2em 0; padding: 0; text-align: left; list-style: none; } app-profile li { padding: .5em 1.2em; border-bottom: 1px dotted white; } app-profile li:first-child { border-top: 1px dotted white; } app-profile time { margin-right: 1em; font-weight: bold; } app-profile figure { margin: 0; padding: 0 1em; } app-profile figcaption { padding: 1em; margin-bottom: 3em; background: white; color: black; position: relative; } app-profile figcaption:after { content: \'*\'; color: transparent; width: 0; height: 0; border-left: 20px solid transparent; border-right: 20px solid transparent; border-top: 25px solid white; position: absolute; bottom: -25px; left: 50%; margin-left: -25px; } app-profile img { width: 40%; border-radius: 3px; } @media (min-width: 700px) { app-profile div { width: 350px; padding-top: 1em; float: right; } app-profile figure { width: 300px; position: absolute; top: 0; left: 0; } }', function(opts) {
    this.props = opts.props
  
});

riot.tag('app-rss', '<section> <fa icon="rss-square"></fa> <ul> <li each="{ props.news }"><a href="{ url }">{ title }</a></li> </ul> <a class="button" href="{ props.url }">{ props.title }</a> </section>', 'app-rss { display: block; background: #656363!important; color: white; padding: 2em 0; } app-rss section { max-width: 700px; margin: 0 auto; position: relative; } app-rss fa { font-size: 200%; } app-rss a { color: white; text-decoration: none; } app-rss .button { background: white; color: #656363; width: 60%; display: inline-block; line-height: 2em; border-radius: 3px; } app-rss ul { margin: 2em 0; padding: 0; border-top: 1px dotted white; text-align: left; list-style: none; } app-rss li { padding: .8em 1.2em; border-bottom: 1px dotted white; } @media (min-width: 700px) { app-rss fa { position: absolute; top: 0; left: 0; font-size: 300%; } app-rss ul { margin-left: 10em; } app-rss .button { width: 8em; float: left; font-size: 90%; margin-top: -4em; background-color: rgba(255,255,255,.5); } app-rss .button:hover { background-color: white; } }', function(opts) {
    this.props = opts.props
  
});

riot.tag('app-youtube', '<figure each="{ props }"> <iframe width="272" height="153" riot-src="{ embed }" frameborder="0" allowfullscreen></iframe> <figcaption>{ title }</figcaption> </figure>', 'app-youtube { display: block; padding: 1em 0; } app-youtube figure { margin: 1em } app-youtube figcaption { color: #999; font-size: 90%; } @media (min-width: 500px) { app-youtube figure { display: inline-block } }', function(opts) {
    this.props = opts.props.map(function(v){
      var id = v.url.replace(/^.+=/, '')
      return {
        title: v.title,
        url:   v.url,
        embed: 'https://www.youtube.com/embed/' + id + '?rel=0&amp;showinfo=0'
      }
    })
  
});

riot.tag('app', '<app-hero props="{ hero }"></app-hero> <app-youtube props="{ youtube }"></app-youtube> <app-manifest props="{ manifest }"></app-manifest> <app-events props="{ events }"></app-events> <app-profile props="{ profile }"></app-profile> <app-rss props="{ rss }"></app-rss> <app-footer props="{ footer }"></app-footer>', 'app > *:nth-child(even) { background: #eaeaea }', function(opts) {
    this.hero = {
      name:  opts.profile.name,
      kana:  opts.profile.kana,
      title: opts.profile.title,
      copy:  opts.profile.copy,
      desc:  opts.profile.desc,
      photo: opts.profile.photo,
      links: opts.links
    }
    this.youtube = opts.youtube
    this.manifest = opts.manifest
    this.events = [
      { title: '街頭演説 (1)', start: '2015-03-20T10:00', location: '下北沢駅周辺' },
      { title: '街頭演説 (2)', start: '2015-03-22T10:00', location: '三軒茶屋駅周辺' },
      { title: 'オープンガバメント勉強会', start: '2015-03-23T18:00', location: '北沢タウンホール' }
    ]
    this.profile = {
      title:   opts.labels.profile,
      message: opts.profile.message,
      photo:   opts.profile.profile,
      records: opts.records
    }
    this.rss = {
      title: opts.labels.bloglink,
      url: opts.profile.blog,
      news: [
        { date: '2015/3/18', title: '立候補の届け出をしてきました。', url: '#' },
        { date: '2015/3/16', title: '◯◯中学校の視察', url: '#' },
        { date: '2015/3/13', title: '◯◯◯◯の教育とセキュリティについて思う', url: '#' }
      ]
    }
    this.footer = {
      copyrights: opts.copyrights,
      license:    opts.license
    }
  
});

riot.tag('fa', '', '@font-face { font-family: \'FontAwesome\'; src: url(\'//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.eot\'); src: url(\'//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.eot#iefix\') format(\'embedded-opentype\'), url(\'//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.woff2\') format(\'woff2\'), url(\'//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.woff\') format(\'woff\'), url(\'//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.ttf\') format(\'truetype\'), url(\'//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.svg#fontawesomeregular\') format(\'svg\'); font-weight: normal; font-style: normal; } fa { display: inline-block; font: normal normal normal 14px/1 FontAwesome; font-size: inherit; text-rendering: auto; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; transform: translate(0, 0); }', function(opts) {
    GLYPHS = {
      'glass': 'f000',
      'music': 'f001',
      'search': 'f002',
      'envelope-o': 'f003',
      'heart': 'f004',
      'star': 'f005',
      'star-o': 'f006',
      'user': 'f007',
      'film': 'f008',
      'th-large': 'f009',
      'th': 'f00a',
      'th-list': 'f00b',
      'check': 'f00c',
      'remove': 'f00d',
      'close': 'f00d',
      'times': 'f00d',
      'search-plus': 'f00e',
      'search-minus': 'f010',
      'power-off': 'f011',
      'signal': 'f012',
      'gear': 'f013',
      'cog': 'f013',
      'trash-o': 'f014',
      'home': 'f015',
      'file-o': 'f016',
      'clock-o': 'f017',
      'road': 'f018',
      'download': 'f019',
      'arrow-circle-o-down': 'f01a',
      'arrow-circle-o-up': 'f01b',
      'inbox': 'f01c',
      'play-circle-o': 'f01d',
      'rotate-right': 'f013',
      'repeat': 'f01e',
      'refresh': 'f021',
      'list-alt': 'f022',
      'lock': 'f023',
      'flag': 'f024',
      'headphones': 'f025',
      'volume-off': 'f026',
      'volume-down': 'f027',
      'volume-up': 'f028',
      'qrcode': 'f029',
      'barcode': 'f02a',
      'tag': 'f02b',
      'tags': 'f02c',
      'book': 'f02d',
      'bookmark': 'f02e',
      'print': 'f02f',
      'camera': 'f030',
      'font': 'f031',
      'bold': 'f032',
      'italic': 'f033',
      'text-height': 'f034',
      'text-width': 'f035',
      'align-left': 'f036',
      'align-center': 'f037',
      'align-right': 'f038',
      'align-justify': 'f039',
      'list': 'f03a',
      'dedent': 'f03b',
      'outdent': 'f03b',
      'indent': 'f03c',
      'video-camera': 'f03d',
      'photo': 'f03e',
      'image': 'f03e',
      'picture-o': 'f03e',
      'pencil': 'f040',
      'map-marker': 'f041',
      'adjust': 'f042',
      'tint': 'f043',
      'edit': 'f044',
      'pencil-square-o': 'f044',
      'share-square-o': 'f045',
      'check-square-o': 'f046',
      'arrows': 'f047',
      'step-backward': 'f048',
      'fast-backward': 'f049',
      'backward': 'f04a',
      'play': 'f04b',
      'pause': 'f04c',
      'stop': 'f04d',
      'forward': 'f04e',
      'fast-forward': 'f050',
      'step-forward': 'f051',
      'eject': 'f052',
      'chevron-left': 'f053',
      'chevron-right': 'f054',
      'plus-circle': 'f055',
      'minus-circle': 'f056',
      'times-circle': 'f057',
      'check-circle': 'f058',
      'question-circle': 'f059',
      'info-circle': 'f05a',
      'crosshairs': 'f05b',
      'times-circle-o': 'f05c',
      'check-circle-o': 'f05d',
      'ban': 'f05e',
      'arrow-left': 'f060',
      'arrow-right': 'f061',
      'arrow-up': 'f062',
      'arrow-down': 'f063',
      'mail-forward': 'f064',
      'share': 'f064',
      'expand': 'f065',
      'compress': 'f066',
      'plus': 'f067',
      'minus': 'f068',
      'asterisk': 'f069',
      'exclamation-circle': 'f06a',
      'gift': 'f06b',
      'leaf': 'f06c',
      'fire': 'f06d',
      'eye': 'f06e',
      'eye-slash': 'f070',
      'warning': 'f071',
      'exclamation-triangle': 'f071',
      'plane': 'f072',
      'calendar': 'f073',
      'random': 'f074',
      'comment': 'f075',
      'magnet': 'f076',
      'chevron-up': 'f077',
      'chevron-down': 'f078',
      'retweet': 'f079',
      'shopping-cart': 'f07a',
      'folder': 'f07b',
      'folder-open': 'f07c',
      'arrows-v': 'f07d',
      'arrows-h': 'f07e',
      'bar-chart-o': 'f080',
      'bar-chart': 'f080',
      'twitter-square': 'f081',
      'facebook-square': 'f082',
      'camera-retro': 'f083',
      'key': 'f084',
      'gears': 'f085',
      'cogs': 'f085',
      'comments': 'f086',
      'thumbs-o-up': 'f087',
      'thumbs-o-down': 'f088',
      'star-half': 'f089',
      'heart-o': 'f08a',
      'sign-out': 'f08b',
      'linkedin-square': 'f08c',
      'thumb-tack': 'f08d',
      'external-link': 'f08e',
      'sign-in': 'f090',
      'trophy': 'f091',
      'github-square': 'f092',
      'upload': 'f093',
      'lemon-o': 'f094',
      'phone': 'f095',
      'square-o': 'f096',
      'bookmark-o': 'f097',
      'phone-square': 'f098',
      'twitter': 'f099',
      'facebook-f': 'f09a',
      'facebook': 'f09a',
      'github': 'f09b',
      'unlock': 'f09c',
      'credit-card': 'f09d',
      'rss': 'f09e',
      'hdd-o': 'f0a0',
      'bullhorn': 'f0a1',
      'bell': 'f0f3',
      'certificate': 'f0a3',
      'hand-o-right': 'f0a4',
      'hand-o-left': 'f0a5',
      'hand-o-up': 'f0a6',
      'hand-o-down': 'f0a7',
      'arrow-circle-left': 'f0a8',
      'arrow-circle-right': 'f0a9',
      'arrow-circle-up': 'f0aa',
      'arrow-circle-down': 'f0ab',
      'globe': 'f0ac',
      'wrench': 'f0ad',
      'tasks': 'f0ae',
      'filter': 'f0b0',
      'briefcase': 'f0b1',
      'arrows-alt': 'f0b2',
      'group': 'f0c0',
      'users': 'f0c0',
      'chain': 'f0c1',
      'link': 'f0c1',
      'cloud': 'f0c2',
      'flask': 'f0c3',
      'cut': 'f0c4',
      'scissors': 'f0c4',
      'copy': 'f0c5',
      'files-o': 'f0c5',
      'paperclip': 'f0c6',
      'save': 'f0c7',
      'floppy-o': 'f0c7',
      'square': 'f0c8',
      'navicon': 'f0c9',
      'reorder': 'f0c9',
      'bars': 'f0c9',
      'list-ul': 'f0ca',
      'list-ol': 'f0cb',
      'strikethrough': 'f0cc',
      'underline': 'f0cd',
      'table': 'f0ce',
      'magic': 'f0d0',
      'truck': 'f0d1',
      'pinterest': 'f0d2',
      'pinterest-square': 'f0d3',
      'google-plus-square': 'f0d4',
      'google-plus': 'f0d5',
      'money': 'f0d6',
      'caret-down': 'f0d7',
      'caret-up': 'f0d8',
      'caret-left': 'f0d9',
      'caret-right': 'f0da',
      'columns': 'f0db',
      'unsorted': 'f0dc',
      'sort': 'f0dc',
      'sort-down': 'f0dd',
      'sort-desc': 'f0dd',
      'sort-up': 'f0de',
      'sort-asc': 'f0de',
      'envelope': 'f0e0',
      'linkedin': 'f0e1',
      'rotate-left': 'f0e2',
      'undo': 'f0e2',
      'legal': 'f0e3',
      'gavel': 'f0e3',
      'dashboard': 'f0e4',
      'tachometer': 'f0e4',
      'comment-o': 'f0e5',
      'comments-o': 'f0e6',
      'flash': 'f0e7',
      'bolt': 'f0e7',
      'sitemap': 'f0e8',
      'umbrella': 'f0e9',
      'paste': 'f0ea',
      'clipboard': 'f0ea',
      'lightbulb-o': 'f0eb',
      'exchange': 'f0ec',
      'cloud-download': 'f0ed',
      'cloud-upload': 'f0ee',
      'user-md': 'f0f0',
      'stethoscope': 'f0f1',
      'suitcase': 'f0f2',
      'bell-o': 'f0a2',
      'coffee': 'f0f4',
      'cutlery': 'f0f5',
      'file-text-o': 'f0f6',
      'building-o': 'f0f7',
      'hospital-o': 'f0f8',
      'ambulance': 'f0f9',
      'medkit': 'f0fa',
      'fighter-jet': 'f0fb',
      'beer': 'f0fc',
      'h-square': 'f0fd',
      'plus-square': 'f0fe',
      'angle-double-left': 'f100',
      'angle-double-right': 'f101',
      'angle-double-up': 'f102',
      'angle-double-down': 'f103',
      'angle-left': 'f104',
      'angle-right': 'f105',
      'angle-up': 'f106',
      'angle-down': 'f107',
      'desktop': 'f108',
      'laptop': 'f109',
      'tablet': 'f10a',
      'mobile-phone': 'f10b',
      'mobile': 'f10b',
      'circle-o': 'f10c',
      'quote-left': 'f10d',
      'quote-right': 'f10e',
      'spinner': 'f110',
      'circle': 'f111',
      'mail-reply': 'f112',
      'reply': 'f112',
      'github-alt': 'f113',
      'folder-o': 'f114',
      'folder-open-o': 'f115',
      'smile-o': 'f118',
      'frown-o': 'f119',
      'meh-o': 'f11a',
      'gamepad': 'f11b',
      'keyboard-o': 'f11c',
      'flag-o': 'f11d',
      'flag-checkered': 'f11e',
      'terminal': 'f120',
      'code': 'f121',
      'mail-reply-all': 'f122',
      'reply-all': 'f122',
      'star-half-empty': 'f123',
      'star-half-full': 'f123',
      'star-half-o': 'f123',
      'location-arrow': 'f124',
      'crop': 'f125',
      'code-fork': 'f126',
      'unlink': 'f127',
      'chain-broken': 'f127',
      'question': 'f128',
      'info': 'f129',
      'exclamation': 'f12a',
      'superscript': 'f12b',
      'subscript': 'f12c',
      'eraser': 'f12d',
      'puzzle-piece': 'f12e',
      'microphone': 'f130',
      'microphone-slash': 'f131',
      'shield': 'f132',
      'calendar-o': 'f133',
      'fire-extinguisher': 'f134',
      'rocket': 'f135',
      'maxcdn': 'f136',
      'chevron-circle-left': 'f137',
      'chevron-circle-right': 'f138',
      'chevron-circle-up': 'f139',
      'chevron-circle-down': 'f13a',
      'html5': 'f13b',
      'css3': 'f13c',
      'anchor': 'f13d',
      'unlock-alt': 'f13e',
      'bullseye': 'f140',
      'ellipsis-h': 'f141',
      'ellipsis-v': 'f142',
      'rss-square': 'f143',
      'play-circle': 'f144',
      'ticket': 'f145',
      'minus-square': 'f146',
      'minus-square-o': 'f147',
      'level-up': 'f148',
      'level-down': 'f149',
      'check-square': 'f14a',
      'pencil-square': 'f14b',
      'external-link-square': 'f14c',
      'share-square': 'f14d',
      'compass': 'f14e',
      'toggle-down': 'f150',
      'caret-square-o-down': 'f150',
      'toggle-up': 'f151',
      'caret-square-o-up': 'f151',
      'toggle-right': 'f152',
      'caret-square-o-right': 'f152',
      'euro': 'f153',
      'eur': 'f153',
      'gbp': 'f154',
      'dollar': 'f155',
      'usd': 'f155',
      'rupee': 'f156',
      'inr': 'f156',
      'cny': 'f157',
      'rmb': 'f157',
      'yen': 'f157',
      'jpy': 'f157',
      'ruble': 'f158',
      'rouble': 'f158',
      'rub': 'f158',
      'won': 'f159',
      'krw': 'f159',
      'bitcoin': 'f15a',
      'btc': 'f15a',
      'file': 'f15b',
      'file-text': 'f15c',
      'sort-alpha-asc': 'f15d',
      'sort-alpha-desc': 'f15e',
      'sort-amount-asc': 'f160',
      'sort-amount-desc': 'f161',
      'sort-numeric-asc': 'f162',
      'sort-numeric-desc': 'f163',
      'thumbs-up': 'f164',
      'thumbs-down': 'f165',
      'youtube-square': 'f166',
      'youtube': 'f167',
      'xing': 'f168',
      'xing-square': 'f169',
      'youtube-play': 'f16a',
      'dropbox': 'f16b',
      'stack-overflow': 'f16c',
      'instagram': 'f16d',
      'flickr': 'f16e',
      'adn': 'f170',
      'bitbucket': 'f171',
      'bitbucket-square': 'f172',
      'tumblr': 'f173',
      'tumblr-square': 'f174',
      'long-arrow-down': 'f175',
      'long-arrow-up': 'f176',
      'long-arrow-left': 'f177',
      'long-arrow-right': 'f178',
      'apple': 'f179',
      'windows': 'f17a',
      'android': 'f17b',
      'linux': 'f17c',
      'dribbble': 'f17d',
      'skype': 'f17e',
      'foursquare': 'f180',
      'trello': 'f181',
      'female': 'f182',
      'male': 'f183',
      'gittip': 'f184',
      'gratipay': 'f184',
      'sun-o': 'f185',
      'moon-o': 'f186',
      'archive': 'f187',
      'bug': 'f188',
      'vk': 'f189',
      'weibo': 'f18a',
      'renren': 'f18b',
      'pagelines': 'f18c',
      'stack-exchange': 'f18d',
      'arrow-circle-o-right': 'f18e',
      'arrow-circle-o-left': 'f190',
      'toggle-left': 'f191',
      'caret-square-o-left': 'f191',
      'dot-circle-o': 'f192',
      'wheelchair': 'f193',
      'vimeo-square': 'f194',
      'turkish-lira': 'f195',
      'try': 'f195',
      'plus-square-o': 'f196',
      'space-shuttle': 'f197',
      'slack': 'f198',
      'envelope-square': 'f199',
      'wordpress': 'f19a',
      'openid': 'f19b',
      'institution': 'f19c',
      'bank': 'f19c',
      'university': 'f19c',
      'mortar-board': 'f19d',
      'graduation-cap': 'f19d',
      'yahoo': 'f19e',
      'google': 'f1a0',
      'reddit': 'f1a1',
      'reddit-square': 'f1a2',
      'stumbleupon-circle': 'f1a3',
      'stumbleupon': 'f1a4',
      'delicious': 'f1a5',
      'digg': 'f1a6',
      'pied-piper': 'f1a7',
      'pied-piper-alt': 'f1a8',
      'drupal': 'f1a9',
      'joomla': 'f1aa',
      'language': 'f1ab',
      'fax': 'f1ac',
      'building': 'f1ad',
      'child': 'f1ae',
      'paw': 'f1b0',
      'spoon': 'f1b1',
      'cube': 'f1b2',
      'cubes': 'f1b3',
      'behance': 'f1b4',
      'behance-square': 'f1b5',
      'steam': 'f1b6',
      'steam-square': 'f1b7',
      'recycle': 'f1b8',
      'automobile': 'f1b9',
      'car': 'f1b9',
      'cab': 'f1ba',
      'taxi': 'f1ba',
      'tree': 'f1bb',
      'spotify': 'f1bc',
      'deviantart': 'f1bd',
      'soundcloud': 'f1be',
      'database': 'f1c0',
      'file-pdf-o': 'f1c1',
      'file-word-o': 'f1c2',
      'file-excel-o': 'f1c3',
      'file-powerpoint-o': 'f1c4',
      'file-photo-o': 'f1c5',
      'file-picture-o': 'f1c5',
      'file-image-o': 'f1c5',
      'file-zip-o': 'f1c6',
      'file-archive-o': 'f1c6',
      'file-sound-o': 'f1c7',
      'file-audio-o': 'f1c7',
      'file-movie-o': 'f1c8',
      'file-video-o': 'f1c8',
      'file-code-o': 'f1c9',
      'vine': 'f1ca',
      'codepen': 'f1cb',
      'jsfiddle': 'f1cc',
      'life-bouy': 'f1cd',
      'life-buoy': 'f1cd',
      'life-saver': 'f1cd',
      'support': 'f1cd',
      'life-ring': 'f1cd',
      'circle-o-notch': 'f1ce',
      'ra': 'f1d0',
      'rebel': 'f1d0',
      'ge': 'f1d1',
      'empire': 'f1d1',
      'git-square': 'f1d2',
      'git': 'f1d3',
      'hacker-news': 'f1d4',
      'tencent-weibo': 'f1d5',
      'qq': 'f1d6',
      'wechat': 'f1d7',
      'weixin': 'f1d7',
      'send': 'f1d8',
      'paper-plane': 'f1d8',
      'send-o': 'f1d9',
      'paper-plane-o': 'f1d9',
      'history': 'f1da',
      'genderless': 'f1db',
      'circle-thin': 'f1db',
      'header': 'f1dc',
      'paragraph': 'f1dd',
      'sliders': 'f1de',
      'share-alt': 'f1e0',
      'share-alt-square': 'f1e1',
      'bomb': 'f1e2',
      'soccer-ball-o': 'f1e3',
      'futbol-o': 'f1e3',
      'tty': 'f1e4',
      'binoculars': 'f1e5',
      'plug': 'f1e6',
      'slideshare': 'f1e7',
      'twitch': 'f1e8',
      'yelp': 'f1e9',
      'newspaper-o': 'f1ea',
      'wifi': 'f1eb',
      'calculator': 'f1ec',
      'paypal': 'f1ed',
      'google-wallet': 'f1ee',
      'cc-visa': 'f1f0',
      'cc-mastercard': 'f1f1',
      'cc-discover': 'f1f2',
      'cc-amex': 'f1f3',
      'cc-paypal': 'f1f4',
      'cc-stripe': 'f1f5',
      'bell-slash': 'f1f6',
      'bell-slash-o': 'f1f7',
      'trash': 'f1f8',
      'copyright': 'f1f9',
      'at': 'f1fa',
      'eyedropper': 'f1fb',
      'paint-brush': 'f1fc',
      'birthday-cake': 'f1fd',
      'area-chart': 'f1fe',
      'pie-chart': 'f200',
      'line-chart': 'f201',
      'lastfm': 'f202',
      'lastfm-square': 'f203',
      'toggle-off': 'f204',
      'toggle-on': 'f205',
      'bicycle': 'f206',
      'bus': 'f207',
      'ioxhost': 'f208',
      'angellist': 'f209',
      'cc': 'f20a',
      'shekel': 'f20b',
      'sheqel': 'f20b',
      'ils': 'f20b',
      'meanpath': 'f20c',
      'buysellads': 'f20d',
      'connectdevelop': 'f20e',
      'dashcube': 'f210',
      'forumbee': 'f211',
      'leanpub': 'f212',
      'sellsy': 'f213',
      'shirtsinbulk': 'f214',
      'simplybuilt': 'f215',
      'skyatlas': 'f216',
      'cart-plus': 'f217',
      'cart-arrow-down': 'f218',
      'diamond': 'f219',
      'ship': 'f21a',
      'user-secret': 'f21b',
      'motorcycle': 'f21c',
      'street-view': 'f21d',
      'heartbeat': 'f21e',
      'venus': 'f221',
      'mars': 'f222',
      'mercury': 'f223',
      'transgender': 'f224',
      'transgender-alt': 'f225',
      'venus-double': 'f226',
      'mars-double': 'f227',
      'venus-mars': 'f228',
      'mars-stroke': 'f229',
      'mars-stroke-v': 'f22a',
      'mars-stroke-h': 'f22b',
      'neuter': 'f22c',
      'facebook-official': 'f230',
      'pinterest-p': 'f231',
      'whatsapp': 'f232',
      'server': 'f233',
      'user-plus': 'f234',
      'user-times': 'f235',
      'hotel': 'f236',
      'bed': 'f236',
      'viacoin': 'f237',
      'train': 'f238',
      'subway': 'f239',
      'medium': 'f23a'
    }

    this.root.innerHTML = '&#x' + GLYPHS[opts.icon] + ';'
  
});
