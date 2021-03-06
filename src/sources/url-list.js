/*
 * Submits any page loaded by the browser for classification
 */

import browser from 'webextension-polyfill';

class UrlListSource {
    constructor(recipe) {
        this.recipe = recipe
        this.urls = [
            'https://en.wikipedia.org/wiki/Nero',
            'https://en.wikipedia.org/wiki/Caligula',
            'https://en.wikipedia.org/wiki/Mahmoud_Ahmadinejad',
            'https://en.wikipedia.org/wiki/Syed_Ahmed',
            'https://en.wikipedia.org/wiki/Muhammad_Ali',
            'https://en.wikipedia.org/wiki/Kirstie_Alley',
            'https://en.wikipedia.org/wiki/Idi_Amin',
            'https://en.wikipedia.org/wiki/Criss_Angel',
            'https://en.wikipedia.org/wiki/Yasser_Arafat',
            'https://en.wikipedia.org/wiki/Jodi_Arias',
            'https://en.wikipedia.org/wiki/Joe_Arpaio',
            'https://en.wikipedia.org/wiki/Maricopa_County,_Arizona',
            'https://en.wikipedia.org/wiki/Julian_Assange',
            'https://en.wikipedia.org/wiki/Hans_Asperger',
            'https://en.wikipedia.org/wiki/Mustafa_Kemal_Atat%C3%BCrk',
            'https://en.wikipedia.org/wiki/Gilad_Atzmon',
            'https://en.wikipedia.org/wiki/Michelle_Bachelet',
            'https://en.wikipedia.org/wiki/Michele_Bachmann',
            'https://en.wikipedia.org/wiki/Brigitte_Bardot',
            'https://en.wikipedia.org/wiki/Roseanne_Barr',
            'https://en.wikipedia.org/wiki/Glenn_Beck',
            'https://en.wikipedia.org/wiki/David_Beckham',
            'https://en.wikipedia.org/wiki/Joy_Behar',
            'https://en.wikipedia.org/wiki/Silvio_Berlusconi',
            'https://en.wikipedia.org/wiki/Art_Bell',
            'https://en.wikipedia.org/wiki/Conspiracy_theories',
            'https://en.wikipedia.org/wiki/Bruno_Bettelheim',
            'https://en.wikipedia.org/wiki/Joe_Biden',
            'https://en.wikipedia.org/wiki/Tony_Blair',
            'https://en.wikipedia.org/wiki/Robert_Blake_(actor)',
            'https://en.wikipedia.org/wiki/Hans_Blix',
            'https://en.wikipedia.org/wiki/Christoph_Blocher',
            'https://en.wikipedia.org/wiki/Switzerland',
            'https://en.wikipedia.org/wiki/Swiss_Federal_Council',
            'https://en.wikipedia.org/wiki/Barry_Bonds',
            'https://en.wikipedia.org/wiki/BALCO',
            'https://en.wikipedia.org/wiki/Drug',
            'https://en.wikipedia.org/wiki/Major_League_Baseball',
            'https://en.wikipedia.org/wiki/Jose_Canseco',
            'https://en.wikipedia.org/wiki/Mark_McGwire',
            'https://en.wikipedia.org/wiki/Alex_Rodriguez',
            'https://en.wikipedia.org/wiki/Bonnie_and_Clyde',
            'https://en.wikipedia.org/wiki/Ru%C4%91er_Bo%C5%A1kovi%C4%87',
            'https://en.wikipedia.org/wiki/John_and_Lorena_Bobbitt',
            'https://en.wikipedia.org/wiki/Marital_rape',
            'https://en.wikipedia.org/wiki/Leonid_Brezhnev',
            'https://en.wikipedia.org/wiki/Chris_Brown',
            'https://en.wikipedia.org/wiki/Rihanna',
            'https://en.wikipedia.org/wiki/Jerry_Brown',
            'https://en.wikipedia.org/wiki/Murphy_Brown',
            'https://en.wikipedia.org/wiki/Anita_Bryant',
            'https://en.wikipedia.org/wiki/Kobe_Bryant',
            'https://en.wikipedia.org/wiki/Pat_Buchanan',
            'https://en.wikipedia.org/wiki/Ted_Bundy',
            'https://en.wikipedia.org/wiki/George_W._Bush',
            'https://en.wikipedia.org/wiki/George_H._W._Bush',
            'https://en.wikipedia.org/wiki/Jeb_Bush',
            'https://en.wikipedia.org/wiki/Richard_Girnt_Butler',
            'https://en.wikipedia.org/wiki/Aryan_Nations',
            'https://en.wikipedia.org/wiki/George_Carlin',
            'https://en.wikipedia.org/wiki/Jimmy_Carter',
            'https://en.wikipedia.org/wiki/Fidel_Castro',
            'https://en.wikipedia.org/wiki/Ra%C3%BAl_Castro',
            'https://en.wikipedia.org/wiki/Cesar_Chavez',
            'https://en.wikipedia.org/wiki/Hugo_Ch%C3%A1vez',
            'https://en.wikipedia.org/wiki/Dave_Chappelle',
            'https://en.wikipedia.org/wiki/Dick_Cheney',
            'https://en.wikipedia.org/wiki/Halliburton',
            'https://en.wikipedia.org/wiki/Cher',
            'https://en.wikipedia.org/wiki/Sonny_Bono',
            'https://en.wikipedia.org/wiki/Mary_Bono_Mack',
            'https://en.wikipedia.org/wiki/Jacques_Chirac',
            'https://en.wikipedia.org/wiki/Margaret_Cho',
            'https://en.wikipedia.org/wiki/Seung-Hui_Cho',
            'https://en.wikipedia.org/wiki/Virginia_Tech',
            'https://en.wikipedia.org/wiki/Noam_Chomsky',
            'https://en.wikipedia.org/wiki/Chris_Christie',
            'https://en.wikipedia.org/wiki/Ward_Churchill',
            'https://en.wikipedia.org/wiki/Bill_Clinton',
            'https://en.wikipedia.org/wiki/Hillary_Rodham_Clinton',
            'https://en.wikipedia.org/wiki/Walmart',
            'https://en.wikipedia.org/wiki/Kurt_Cobain',
            'https://en.wikipedia.org/wiki/Christopher_Columbus',
            'https://en.wikipedia.org/wiki/Sean_Combs',
            'https://en.wikipedia.org/wiki/Nicolaus_Copernicus',
            'https://en.wikipedia.org/wiki/Stephen_Colbert',
            'https://en.wikipedia.org/wiki/Jon_Corzine',
            'https://en.wikipedia.org/wiki/New_Jersey',
            'https://en.wikipedia.org/wiki/Ann_Coulter',
            'https://en.wikipedia.org/wiki/Tom_Cruise',
            'https://en.wikipedia.org/wiki/Scientology',
            'https://en.wikipedia.org/wiki/Miley_Cyrus',
            'https://en.wikipedia.org/wiki/Salvador_Dal%C3%AD',
            'https://en.wikipedia.org/wiki/Jeffrey_Dahmer',
            'https://en.wikipedia.org/wiki/Angela_Davis',
            'https://en.wikipedia.org/wiki/Richard_Dawkins',
            'https://en.wikipedia.org/wiki/Ellen_DeGeneres',
            'https://en.wikipedia.org/wiki/Paula_Deen',
            'https://en.wikipedia.org/wiki/Hassan_Diab',
            'https://en.wikipedia.org/wiki/1980_Paris_synagogue_bombing',
            'https://en.wikipedia.org/wiki/Andrew_Dice_Clay',
            'https://en.wikipedia.org/wiki/Dixie_Chicks',
            'https://en.wikipedia.org/wiki/Walt_Disney',
            'https://en.wikipedia.org/wiki/Phil_Donahue',
            'https://en.wikipedia.org/wiki/Duggar_family',
            'https://en.wikipedia.org/wiki/David_Duke',
            'https://en.wikipedia.org/wiki/Andrea_Dworkin',
            'https://en.wikipedia.org/wiki/John_Edwards',
            'https://en.wikipedia.org/wiki/Marc_Emery',
            'https://en.wikipedia.org/wiki/Eminem',
            'https://en.wikipedia.org/wiki/Jeffrey_Epstein',
            'https://en.wikipedia.org/wiki/Pablo_Escobar',
            'https://en.wikipedia.org/wiki/Jerry_Falwell',
            'https://en.wikipedia.org/wiki/Melissa_Farley',
            'https://en.wikipedia.org/wiki/Carly_Fiorina',
            'https://en.wikipedia.org/wiki/Gerald_Ford',
            'https://en.wikipedia.org/wiki/Watergate_scandal',
            'https://en.wikipedia.org/wiki/Henry_Ford',
            'https://en.wikipedia.org/wiki/Michael_J._Fox',
            'https://en.wikipedia.org/wiki/Christopher_Reeve',
            'https://en.wikipedia.org/wiki/Al_Franken',
            'https://en.wikipedia.org/wiki/Kenny_G',
            'https://en.wikipedia.org/wiki/Muammar_Gaddafi',
            'https://en.wikipedia.org/wiki/William_Gaillard',
            'https://en.wikipedia.org/wiki/Galileo',
            'https://en.wikipedia.org/wiki/Janeane_Garofalo',
            'https://en.wikipedia.org/wiki/Charles_de_Gaulle',
            'https://en.wikipedia.org/wiki/Mel_Gibson',
            'https://en.wikipedia.org/wiki/Antisemitism',
            'https://en.wikipedia.org/wiki/Homophobia',
            'https://en.wikipedia.org/wiki/Kathie_Lee_Gifford',
            'https://en.wikipedia.org/wiki/Sweatshop',
            'https://en.wikipedia.org/wiki/Frank_Gifford',
            'https://en.wikipedia.org/wiki/Comedy',
            'https://en.wikipedia.org/wiki/Newt_Gingrich',
            'https://en.wikipedia.org/wiki/Girls_Aloud',
            'https://en.wikipedia.org/wiki/Rudy_Giuliani',
            'https://en.wikipedia.org/wiki/Nancy_Grace',
            'https://en.wikipedia.org/wiki/Wayne_Gretzky',
            'https://en.wikipedia.org/wiki/Janet_Jones',
            'https://en.wikipedia.org/wiki/Gambling',
            'https://en.wikipedia.org/wiki/Joseph_Goebbels',
            'https://en.wikipedia.org/wiki/Whoopi_Goldberg',
            'https://en.wikipedia.org/wiki/The_View_(U.S._TV_series)',
            'https://en.wikipedia.org/wiki/Barry_Goldwater',
            'https://en.wikipedia.org/wiki/Mikhail_Gorbachev',
            'https://en.wikipedia.org/wiki/Al_Gore',
            'https://en.wikipedia.org/wiki/Temple_Grandin',
            'https://en.wikipedia.org/wiki/Autism',
            'https://en.wikipedia.org/wiki/Alan_Greenspan',
            'https://en.wikipedia.org/wiki/Woody_Guthrie',
            'https://en.wikipedia.org/wiki/Guns_N%27_Roses',
            'https://en.wikipedia.org/wiki/Axl_Rose',
            'https://en.wikipedia.org/wiki/Ferenc_Gyurcs%C3%A1ny',
            'https://en.wikipedia.org/wiki/Ted_Haggard',
            'https://en.wikipedia.org/wiki/Tarja_Halonen',
            'https://en.wikipedia.org/wiki/Ken_Ham',
            'https://en.wikipedia.org/wiki/Young_Earth_creationism',
            'https://en.wikipedia.org/wiki/Answers_in_Genesis',
            'https://en.wikipedia.org/wiki/Sean_Hannity',
            'https://en.wikipedia.org/wiki/Jesse_Helms',
            'https://en.wikipedia.org/wiki/Phil_Hendrie',
            'https://en.wikipedia.org/wiki/Patty_Hearst',
            'https://en.wikipedia.org/wiki/Symbionese_Liberation_Army',
            'https://en.wikipedia.org/wiki/Hideki_Tojo',
            'https://en.wikipedia.org/wiki/Japan',
            'https://en.wikipedia.org/wiki/Paris_Hilton',
            'https://en.wikipedia.org/wiki/Anita_Hill',
            'https://en.wikipedia.org/wiki/Clarence_Thomas',
            'https://en.wikipedia.org/wiki/Heinrich_Himmler',
            'https://en.wikipedia.org/wiki/Emperor_Hirohito',
            'https://en.wikipedia.org/wiki/Adolf_Hitler',
            'https://en.wikipedia.org/wiki/Holocaust',
            'https://en.wikipedia.org/wiki/Roma_people',
            'https://en.wikipedia.org/wiki/Slavs',
            'https://en.wikipedia.org/wiki/Racism',
            'https://en.wikipedia.org/wiki/Antisemitism',
            'https://en.wikipedia.org/wiki/Erich_Honecker',
            'https://en.wikipedia.org/wiki/East_Germany',
            'https://en.wikipedia.org/wiki/Jimmy_Hoffa',
            'https://en.wikipedia.org/wiki/Kidnapping',
            'https://en.wikipedia.org/wiki/J._Edgar_Hoover',
            'https://en.wikipedia.org/wiki/Katie_Hopkins',
            'https://en.wikipedia.org/wiki/John_Howard',
            'https://en.wikipedia.org/wiki/L._Ron_Hubbard',
            'https://en.wikipedia.org/wiki/Mike_Huckabee',
            'https://en.wikipedia.org/wiki/Rock_Hudson',
            'https://en.wikipedia.org/wiki/Saddam_Hussein',
            'https://en.wikipedia.org/wiki/Yusuf_Islam',
            'https://en.wikipedia.org/wiki/Andrew_Jackson',
            'https://en.wikipedia.org/wiki/American_Indians',
            'https://en.wikipedia.org/wiki/Trail_of_Tears',
            'https://en.wikipedia.org/wiki/George_Jackson_(Black_Panther)',
            'https://en.wikipedia.org/wiki/Jesse_Jackson',
            'https://en.wikipedia.org/wiki/Michael_Jackson',
            'https://en.wikipedia.org/wiki/People_v._Jackson',
            'https://en.wikipedia.org/wiki/Jay-Z',
            'https://en.wikipedia.org/wiki/Beyonce',
            'https://en.wikipedia.org/wiki/Thomas_Jefferson',
            'https://en.wikipedia.org/wiki/Sheila_Jeffreys',
            'https://en.wikipedia.org/wiki/Caitlyn_Jenner',
            'https://en.wikipedia.org/wiki/Bruce_Jenner',
            'https://en.wikipedia.org/wiki/Elton_John',
            'https://en.wikipedia.org/wiki/Magic_Johnson',
            'https://en.wikipedia.org/wiki/Angelina_Jolie',
            'https://en.wikipedia.org/wiki/Brad_Pitt',
            'https://en.wikipedia.org/wiki/Alex_Jones',
            'https://en.wikipedia.org/wiki/Jenny_Jones',
            'https://en.wikipedia.org/wiki/Michael_Jordan',
            'https://en.wikipedia.org/wiki/John_F._Kennedy',
            'https://en.wikipedia.org/wiki/Robert_F._Kennedy',
            'https://en.wikipedia.org/wiki/Ted_Kennedy',
            'https://en.wikipedia.org/wiki/Jacqueline_Kennedy_Onassis',
            'https://en.wikipedia.org/wiki/Aristotle_Onassis',
            'https://en.wikipedia.org/wiki/Colin_Kaepernick',
            'https://en.wikipedia.org/wiki/Kim_Kardashian',
            'https://en.wikipedia.org/wiki/Andy_Kaufman',
            'https://en.wikipedia.org/wiki/John_Kerry',
            'https://en.wikipedia.org/wiki/Khomeini',
            'https://en.wikipedia.org/wiki/Nikita_Khrushchev',
            'https://en.wikipedia.org/wiki/Kim_Il_Sung',
            'https://en.wikipedia.org/wiki/Kim_Jong_Il',
            'https://en.wikipedia.org/wiki/Kim_Jong-Un',
            'https://en.wikipedia.org/wiki/Martin_Luther_King,_Jr.',
            'https://en.wikipedia.org/wiki/Rodney_King',
            'https://en.wikipedia.org/wiki/Pia_Kj%C3%A6rsgaard',
            'https://en.wikipedia.org/wiki/Philip_J._Klass',
            'https://en.wikipedia.org/wiki/Polly_Klaas',
            'https://en.wikipedia.org/wiki/Shosei_Koda',
            'https://en.wikipedia.org/wiki/Junichiro_Koizumi',
            'https://en.wikipedia.org/wiki/Chris_Kyle',
            'https://en.wikipedia.org/wiki/Navy_SEAL',
            'https://en.wikipedia.org/wiki/Lady_Gaga',
            'https://en.wikipedia.org/wiki/K.D._Lang',
            'https://en.wikipedia.org/wiki/Ricki_Lake',
            'https://en.wikipedia.org/wiki/Lyndon_LaRouche',
            'https://en.wikipedia.org/wiki/Carlos_Latuff',
            'https://en.wikipedia.org/wiki/Norman_Lear',
            'https://en.wikipedia.org/wiki/Jean-Marie_Le_Pen',
            'https://en.wikipedia.org/wiki/Marine_Le_Pen',
            'https://en.wikipedia.org/wiki/Heath_Ledger',
            'https://en.wikipedia.org/wiki/Vladimir_I._Lenin',
            'https://en.wikipedia.org/wiki/John_Lennon',
            'https://en.wikipedia.org/wiki/Lewis_Libby',
            'https://en.wikipedia.org/wiki/G._Gordon_Liddy',
            'https://en.wikipedia.org/wiki/Lil_Wayne',
            'https://en.wikipedia.org/wiki/Rush_Limbaugh',
            'https://en.wikipedia.org/wiki/Abraham_Lincoln',
            'https://en.wikipedia.org/wiki/American_Civil_War',
            'https://en.wikipedia.org/wiki/Habeas_corpus',
            'https://en.wikipedia.org/wiki/Jennifer_Lopez',
            'https://en.wikipedia.org/wiki/Lil_B',
            'https://en.wikipedia.org/wiki/Trent_Lott'
        ]
    }

    trigger() {
        this.urls.map(url => {
            console.log('URL', url)
            //this.recipe.classifier.analyze(this.lastPage)
        })
    }
}

UrlListSource.label = 'URL List'
UrlListSource.description = 'Feeds a URL list into the classifier'

export default UrlListSource
