<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'htko_dev2');

/** MySQL database username */
define('DB_USER', 'htko_dev2');

/** MySQL database password */
define('DB_PASSWORD', 'OdtCASXpMPvrelNF');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', 'utf8mb4_unicode_ci');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '|gRO:,CY?4H|A~TV83cT(862C<ws57ApA9z#bR{ngU`[*q_lGt@6n#-/&P3bohR2');
define('SECURE_AUTH_KEY',  ')W.+CH|uI1x$kDeaO;bKrNQzE^3@rFJ(+!|vN[zRtp$Bp(1xWKHk^w[-;F$dbc]k');
define('LOGGED_IN_KEY',    'l/-raDQ%:>bK]J1)o&M_m-@vaXKSE2H4EB[^hN2328-/:_Fn}e7(ACo8d17I/V!e');
define('NONCE_KEY',        '|]eW@txY8#R=@G|`D3RLpB@;0|*EFp;{3yXJ@1TPiw[XKs71zRMaJOFQ5}s|cSD4');
define('AUTH_SALT',        '$HNmfajb4d?%P{6P.M@`F<!;+Xn^rN1UL^Yi*Q_,K, <czJ6%L~na{J8C7}L.u^|');
define('SECURE_AUTH_SALT', 'J5;mf0NCsXJago7Qe9f231#wj0.]hBy]mq/1#%yY`-.zd^5J]s)QvjId_+rTS:<@');
define('LOGGED_IN_SALT',   'C=wv<T]u9`}8vW|ZCFx8C5uM+I69-D>oYX><j.>DV::]KEeH}2O4-Z07;bmM{[T-');
define('NONCE_SALT',       '!:P3ET)4-<c~x+`+|||F&m}Bm(f^i_|z3@R=>M|Np9a7rO.#EW,Z}=M~&OAF|rh:');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
