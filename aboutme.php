<?php
/* =====================================================================
 *  Velasco Portfolio - single-file version
 *  Replaces: data.php, header.php, footer.php, index.php,
 *            aboutme.php, information.php
 *
 *  Pages:  index.php                -> Home
 *          index.php?page=about     -> About
 *          index.php?page=contact   -> Contact
 * ===================================================================== */

/* ---------------------------- DATA ---------------------------------- */
$owner = [
    'name'  => 'Raissel Jan H. Velasco',
    'email' => 'raisseljanv@gmail.com',
    'phone' => '+63 908 649 5143',
];

$socials = [
    ['https://web.facebook.com/RaisselJHV',        './IMAGES/fb.jpg',  'Facebook'],
    ['https://www.instagram.com/raissel_jan/',     './IMAGES/ig.avif', 'Instagram'],
    ['https://web.telegram.org/k/',                './IMAGES/tg.png',  'Telegram'],
];

function renderSocials(array $socials): void
{
    echo '<div class="special-icon">';
    foreach ($socials as [$url, $img, $alt]) {
        printf(
            '<a href="%s" class="icon2" target="_blank" rel="noopener"><img src="%s" alt="%s"></a>',
            htmlspecialchars($url), htmlspecialchars($img), htmlspecialchars($alt)
        );
    }
    echo '</div>';
}

/* ---------------------------- ROUTING ------------------------------- */
$page = $_GET['page'] ?? 'home';
if (!in_array($page, ['home', 'about', 'contact'], true)) {
    $page = 'home';
}

// Works no matter what this file is named (index.php, aboutme.php, ...)
$self = basename($_SERVER['SCRIPT_NAME']);

$navLinks = [
    'home'    => [$self,                'HOME'],
    'about'   => [$self . '?page=about',   'ABOUT'],
    'contact' => [$self . '?page=contact', 'CONTACT'],
];

$currentPage = $page;
$extraScripts = [];

/* ------------------------ PAGE LOGIC (SETUP) ------------------------ */
if ($page === 'home') {
    $pageTitle = 'Velasco Portfolio';
}

if ($page === 'about') {
    $pageTitle = 'About Me | Velasco Portfolio';

    $techStack = [
        ['html.png',   'HTML'],   ['css.png',    'CSS'],
        ['java.png',   'JAVA'],   ['Python.png', 'PYTHON'],
        ['c++.png',    'C++'],    ['csharp.png', 'C#'],
        ['mysql.png',  'MYSQL'],  ['figma.png',  'FIGMA'],
    ];

    $interests = [
        ['basketball.png', 'Basketball'],
        ['eating.png',     'Eating'],
        ['music.png',      'Listening to Music'],
        ['gaming.png',     'Online Games'],
        ['browsing.png',   'Browsing'],
        ['movies.png',     'Watching Movies'],
    ];
}

if ($page === 'contact') {
    $pageTitle = 'Contact | Velasco Portfolio';

    $errors  = [];
    $success = false;
    $old     = ['name' => '', 'email' => '', 'subject' => '', 'message' => ''];

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        foreach ($old as $field => $_) {
            $old[$field] = trim($_POST[$field] ?? '');
        }

        if ($old['name'] === '')                                $errors[] = 'Please enter your name.';
        if (!filter_var($old['email'], FILTER_VALIDATE_EMAIL))  $errors[] = 'Please enter a valid email address.';
        if ($old['subject'] === '')                             $errors[] = 'Please enter a subject.';
        if ($old['message'] === '')                             $errors[] = 'Please enter a message.';

        // Block header injection
        foreach (['name', 'email', 'subject'] as $f) {
            if (preg_match('/[\r\n]/', $old[$f])) $errors[] = 'Invalid characters in ' . $f . '.';
        }

        if (!$errors) {
            $body    = "Name: {$old['name']}\nEmail: {$old['email']}\n\n{$old['message']}";
            $headers = "From: no-reply@" . ($_SERVER['SERVER_NAME'] ?? 'localhost') . "\r\n"
                     . "Reply-To: {$old['email']}\r\n";

            // mail() needs a configured mail server (sendmail/SMTP). For local XAMPP, see notes.
            if (@mail($owner['email'], $old['subject'], $body, $headers)) {
                $success = true;
                $old = array_map(fn() => '', $old);
            } else {
                $errors[] = 'Sorry, the message could not be sent. Please try again later.';
            }
        }
    }

    $e = fn(string $v) => htmlspecialchars($v, ENT_QUOTES);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($pageTitle) ?></title>
    <link rel="stylesheet" href="./CSS/style.css">
    <link rel="stylesheet" href="./CSS/enhancements.css">
</head>
<body class="page-<?= htmlspecialchars($currentPage) ?>">

    <header>
        <div class="header">
            <div class="buttons">
                <?php foreach ($navLinks as $key => [$url, $label]): ?>
                    <a href="<?= $url ?>"<?= $key === $currentPage ? ' class="active"' : '' ?>><?= $label ?></a>
                <?php endforeach; ?>
            </div>
        </div>
    </header>

<?php /* ============================ HOME ============================ */ ?>
<?php if ($page === 'home'): ?>

    <div class="me">
        <div class="portfolio">
            <h1 class="le">Hi, I'm &nbsp;
                <h1 class="pa"><?= htmlspecialchars($owner['name']) ?></h1>
            </h1>
            <h2>───── Information Technology Student</h2>
            <p><?= htmlspecialchars($owner['name']) ?> is an Information Technology student at<br>
               Pamantasan ng Lungsod ng Valenzuela. He loves online gaming
               and sports.</p>

            <div class="info">
                <a href="<?= $self ?>?page=contact" class="btn">Contact Info</a>
            </div>

            <?php renderSocials($socials); ?>
        </div>
        <img src="./IMAGES/rj.jpg" alt="<?= htmlspecialchars($owner['name']) ?>">
    </div>

<?php /* ============================ ABOUT =========================== */ ?>
<?php elseif ($page === 'about'): ?>

    <div class="about">
        <div class="ab">
            <h1>ABOUT&nbsp;
                <h1 class="haha"><i>M</i>E</h1>
            </h1>
        </div>

        <div class="m">
            <div>
                <img src="./IMAGES/rj.jpg" alt="<?= htmlspecialchars($owner['name']) ?>">
            </div>

            <div class="c">
                <h1>INFORMATION TECHNOLOGY STUDENT</h1>
                <p><i><i class="jc"><?= htmlspecialchars($owner['name']) ?></i>, an Information Technology student at Pamantasan ng
                    Lungsod ng Valenzuela, has a strong interest in basketball and computer gaming,
                    and he values rest and maintaining a balanced lifestyle.</i></p>

                <p class="par">When I was a child, my dream was to become a professional basketball player
                    and represent the national team. However, as I grew older, I began to consider
                    practicality in choosing a career path. I was fortunate to be accepted
                    into a university that offers free tuition, which led me to pursue a degree in Information Technology.
                    This opportunity has allowed me to continue my education while developing my skills
                    and knowledge in the field of technology.</p>
            </div>
        </div>

        <div class="int"><h1>TECH STACK</h1></div>
        <?php foreach (array_chunk($techStack, 4) as $row): ?>
            <div class="tech">
                <?php foreach ($row as [$img, $label]): ?>
                    <div class="languages">
                        <img src="./IMAGES/<?= htmlspecialchars($img) ?>" alt="<?= htmlspecialchars($label) ?>">
                        <p><?= htmlspecialchars($label) ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        <?php endforeach; ?>

        <div class="interest">
            <div class="int"><h1>INTEREST</h1></div>
            <?php foreach (array_chunk($interests, 3) as $row): ?>
                <div class="row">
                    <?php foreach ($row as [$img, $label]): ?>
                        <div class="gusto">
                            <img src="./IMAGES/<?= htmlspecialchars($img) ?>" alt="<?= htmlspecialchars($label) ?>">
                            <p><?= htmlspecialchars($label) ?></p>
                        </div>
                    <?php endforeach; ?>
                </div>
            <?php endforeach; ?>
        </div>

        <div class="int"><h1>PROJECTS</h1></div>
        <div class="projects">

            <div class="pro">
                <div class="pik">
                    <img src="./IMAGES/figma.png" alt="Figma project">
                 </div>
                <p>This is a Figma project in first year that is like an online game where you can identify or familiarize what is the character information</p>
                 <a href="https://www.figma.com/design/9SX9rpk3ZBzcUYSTG4pRKf/Oracle-of-Worlds?node-id=56-49&t=a49rN2IsF3DXH1lc-1" target="_blank" rel="noopener noreferrer" class="pdf-btn">
                 Play Prototype
                </a>
            </div>

            <div class="pro">
                <div class="pik">
                    <img src="./IMAGES/css.png" alt="DnG Apparel Website">
                </div>
                <p>
                    This project we made in 2nd year college. DnG Apparel, an online fashion shopping
                    website featuring clothing collections and products.
                </p>
                <a href="./PROJECTS/index.html" target="_blank" rel="noopener noreferrer" class="pdf-btn">
                    Visit Website
                </a>
            </div>

        </div>

<?php /* =========================== CONTACT ========================== */ ?>
<?php elseif ($page === 'contact'): ?>

    <div class="contact-info">
        <div class="left">
            <h1>CONTACT&nbsp;
                <h1 class="im"><i>M</i>E</h1>
            </h1>
            <p>I am highly motivated to contribute and collaborate,<br> with a strong openness to new ideas and projects.
               I am eager to continuously learn, develop my skills<br> and take on new challenges while adding value through my dedication,
               adaptability, and proactive approach.</p>

            <?php renderSocials($socials); ?>

            <div class="kontak">
                <div class="email">
                    <img src="./IMAGES/p.jpg" alt="Phone">
                    <a href="tel:<?= preg_replace('/\s+/', '', $owner['phone']) ?>"><?= $e($owner['phone']) ?></a>
                </div>
                <div class="email">
                    <img src="./IMAGES/e.jpg" alt="Email">
                    <a href="mailto:<?= $e($owner['email']) ?>"><?= $e($owner['email']) ?></a>
                </div>
            </div>
        </div>

        <form class="rigth" method="post" action="<?= $self ?>?page=contact">
            <?php if ($success): ?>
                <p class="form-msg success" role="status">Thank you! Your message has been sent.</p>
            <?php endif; ?>
            <?php foreach ($errors as $err): ?>
                <p class="form-msg error" role="alert"><?= $e($err) ?></p>
            <?php endforeach; ?>

            <div><input type="text"  name="name"    placeholder="Your Name"    value="<?= $e($old['name']) ?>"    required></div>
            <div><input type="email" name="email"   placeholder="Your Email"   value="<?= $e($old['email']) ?>"   required></div>
            <div><input type="text"  name="subject" placeholder="Your Subject" value="<?= $e($old['subject']) ?>" required></div>
            <div><textarea name="message" placeholder="Your Message" required><?= $e($old['message']) ?></textarea></div>

            <button type="submit">Send Message</button>
        </form>
    </div>

<?php endif; ?>

<?php /* ============================ FOOTER ========================== */ ?>
    <footer class="site-footer">
        <p>&copy; <?= date('Y') ?> <?= htmlspecialchars($owner['name'] ?? 'Velasco Portfolio') ?>. All rights reserved.</p>
    </footer>

    <script src="./JS/main.js" defer></script>
    <?php if (!empty($extraScripts)): foreach ($extraScripts as $src): ?>
        <script src="<?= htmlspecialchars($src) ?>" defer></script>
    <?php endforeach; endif; ?>
</body>
</html>