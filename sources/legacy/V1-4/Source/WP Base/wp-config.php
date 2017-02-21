<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link http://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'htko');

/** MySQL database username */
define('DB_USER', 'htko');

/** MySQL database password */
define('DB_PASSWORD', 'PaLyWVbXRZr6b4D2');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'r;e=n;4sg~-L<cD4cB#6;bOr+hL]{<aOnRP38tx)oDFO}jB%fXocU4Vt_LuO0VOE');
define('SECURE_AUTH_KEY',  'i,qS+svmIMS[q0mw@2n?Z0u&OV]lqSubJ-+k+|fJF|rOCn!Q^*/kH0+QC=~$Q|d;');
define('LOGGED_IN_KEY',    'ObheI<<it9W#<o|r(z=82+3UJC-7+-;A -bO0im6Rg.dee&w6kEtwG=*X&DP}#ZB');
define('NONCE_KEY',        '-<nC~izkrE0~>3Qe5$+Vl*e#TbW;=O[*)/+h4H^##iHX]6Hta!iVg-KcN=&YW^bN');
define('AUTH_SALT',        'QZnN^ ;f<fnMy-0B]![09bCT8,0X3gN{xS6/|l7{zE {Vb)U{#S8~>f:jTN$MI++');
define('SECURE_AUTH_SALT', 'ie&Co/_hz2#ufaUQBGplQ+1in/|C;5SmceDU0I.bGsM#ouF*N^~S-yH#7.Af$da,');
define('LOGGED_IN_SALT',   '^VySmI|^;q|mF>UH![?#y{+(h(Hc GA7,^]XNbG9)/&Xh3JUJ0!Lf7#}vKdRV])M');
define('NONCE_SALT',       'IJ7&D_:oRP1~,9zgm?PSm_n8_}aE>.C^+0rejjF}@Ck+EB{6)|6|Y0.p.esI[L6|');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
