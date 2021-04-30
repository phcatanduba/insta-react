export default function Stories() {
    const stories = [
        { user: '9gag', link: `assets/img/9gag.svg` },
        { user: 'meowed', link: `assets/img/meowed.svg` },
        { user: 'barked', link: `assets/img/barked.svg` },
        {
            user: 'nathanwpylestrangeplanet',
            link: `assets/img/nathanwpylestrangeplanet.svg`,
        },
        { user: 'wawawicomics', link: `assets/img/wawawicomics.svg` },
        { user: 'respondeai', link: `assets/img/respondeai.svg` },
        { user: 'filomoderna', link: `assets/img/filomoderna.svg` },
        { user: 'memeriagourmet', link: `assets/img/memeriagourmet.svg` },
    ];

    return (
        <div class="stories">
            {stories.map((story) => (
                <div class="story">
                    <div class="imagem">
                        <img src={story.link} />
                    </div>
                    <div class="usuario">{story.user}</div>
                </div>
            ))}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}
