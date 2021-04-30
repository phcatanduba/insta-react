import User from './User';

export default function Sidebar() {
    const sugestoes = [
        {
            user: 'bad.vibes.memes',
            razao: 'Segue você',
            link: 'assets/img/bad.vibes.memes.svg',
        },
        {
            user: 'chibirdart',
            razao: 'Segue você',
            link: 'assets/img/chibirdart.svg',
        },
        {
            user: 'razoesparaacreditar',
            razao: 'Novo no Instagram',
            link: 'assets/img/razoesparaacreditar.svg',
        },
        {
            user: 'adorable_animals',
            razao: 'Segue você',
            link: 'assets/img/adorable_animals.svg',
        },
        {
            user: 'smallcutecats',
            razao: 'Segue você',
            link: 'assets/img/smallcutecats.svg',
        },
    ];

    return (
        <div class="sidebar">
            <User
                link="assets/img/catanacomics.svg"
                user="catanacomics"
                name="Catana"
            />

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {sugestoes.map((sugestao) => (
                    <div class="sugestao">
                        <div class="usuario">
                            <img src={sugestao.link} />
                            <div class="texto">
                                <div class="nome">{sugestao.user}</div>
                                <div class="razao">{sugestao.razao}</div>
                            </div>
                        </div>

                        <div class="seguir">Seguir</div>
                    </div>
                ))}
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                Termos • Localizações • Contas mais relevantes • Hashtags •
                Idioma
            </div>

            <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
        </div>
    );
}
