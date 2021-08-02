<?php

/*
Template Name: Contact Form
*/


// check if reCAPTCHA isn't loaded earlier by other plugin
if (!class_exists('ReCaptcha')) {
	get_template_part('addons/class.recaptchalib');
}

$publickey = get_theme_mod('photo_contact_public_key','');
$privatekey = get_theme_mod('photo_contact_private_key','');

// The response from reCAPTCHA
$resp = null;
// The error code from reCAPTCHA, if any
$error = null;

$params_name = true;
$params_email = true;
$params_copy = true;


// flag used to detect if the page is validated
$validated = true;
// flag to detect if e-mail was sent
$messageSent = false;
// variable to store the errors, empty string means no error 
$errors = array(
	"name" => '',
	"email" => '',
	"message" => '',
	"recaptcha" => ''
);
// variable for the input fields output
$output = array(
	"name" => '',
	"email" => '',
	"message" => ''
);
// if the form was sent
if(isset($_POST['message-send'])) {
	// check the name
	if($params_name) {
		if(trim($_POST['contact-name']) === '') {
			$validated = false;
			$errors['name'] = __('please enter your name', 'photo');
		} else {
			$output['name'] = trim($_POST['contact-name']);
		}
	}
	// check the e-mail
	if($params_email) {
		if(trim($_POST['email']) === '' || !eregi("^[A-Z0-9._%-]+@[A-Z0-9._%-]+\.[A-Z]{2,4}$", trim($_POST['email']))) {
			$validated = false;
			$errors['email'] = __('please enter correct email address.', 'photo');
		} else {
			$output['email'] = trim($_POST['email']);
		}
	}
	// check the message content
	if(trim($_POST['comment-text']) === '') {
		$validated = false;
		$errors['message'] = __('please enter a text of the message.', 'photo');
	} else {
		$output['message'] = stripslashes(trim(htmlspecialchars($_POST['comment-text'])));
	}
	// reCAPTCHA validation
	if(
		get_theme_mod('photo_contact_enable_captcha', 0) == 1 &&
		$publickey != '' &&
		$privatekey != ''
	) {
		$reCaptcha = new ReCaptcha("$publickey");
		if ($_POST["g-recaptcha-response"]) {
		$resp = $reCaptcha->verifyResponse(
				        $_SERVER["REMOTE_ADDR"],
				        $_POST["g-recaptcha-response"]
				    );
		} else {
					$validated = false;
				    $errors['recaptcha'] = __("The reCAPTCHA wasn't entered correctly. Go back and try it again.", 'photo');		
		}
	}
	// if the all fields was correct
	if($validated) {
		// send an e-mail
		$email = get_theme_mod('photo_contact_email','');
		// if the user specified blank e-mail or not specified it
		if(trim($email) == '') {
			$email = get_option('admin_email');
		}
		// e-mail structure
		if($params_name) {
			$subject = __('From ', 'photo') . $output['name'];
		} else if(!$params_name && $params_email) {
			$subject = __('From ', 'photo') . $output['email'];
		} else {
			$subject = __('From ', 'photo') . get_bloginfo('name');
		}
		
		$body = "<html>";
		$body .= "<body>";
		$body .= "<h1 style=\"font-size: 24px; border-bottom: 4px solid #EEE; margin: 10px 0; padding: 10px 0; font-weight: normal; font-style: italic;\">".__('Message from', 'photo')." <strong>".get_bloginfo('name')."</strong></h1>";
		
		if($params_name) {
			$body .= "<div>";
			$body .= "<h2 style=\"font-size: 16px; font-weight: normal; border-bottom: 1px solid #EEE; padding: 5px 0; margin: 10px 0;\">".__('Name:', 'photo')."</h2>";
			$body .= "<p>".$output['name']."</p>";
			$body .= "</div>";
		}
		
		if($params_email) {
			$body .= "<div>";
			$body .= "<h2 style=\"font-size: 16px; font-weight: normal; border-bottom: 1px solid #EEE; padding: 5px 0; margin: 10px 0;\">".__('E-mail:', 'photo')."</h2>";
			$body .= "<p>".$output['email']."</p>";
			$body .= "</div>";
		}
		
		$body .= "<div>";
		$body .= "<h2 style=\"font-size: 16px; font-weight: normal; border-bottom: 1px solid #EEE; padding: 5px 0; margin: 10px 0;\">".__('Message:', 'photo')."</h2>";
		$body .= $output['message'];
		$body .= "</div>";
		$body .= "</body>";
		$body .= "</html>";
		
		if($params_name && $params_email) {
			$headers[] = 'From: '.$output['name'].' <'.$output['email'].'>';
			$headers[] = 'Reply-To: ' . $output['email'];
			$headers[] = 'Content-type: text/html';
		} else if($params_name && !$params_email) {
			$headers[] = 'From: '.$output['name'];
			$headers[] = 'Content-type: text/html';
		} else if(!$params_name && $params_email) {
			$headers[] = 'From: '.$output['email'].' <'.$output['email'].'>';
			$headers[] = 'Reply-To: ' . $output['email'];
			$headers[] = 'Content-type: text/html';
		} else {
			$headers[] = 'Content-type: text/html';
		}

		wp_mail($email, $subject, $body, $headers);
		
		if($params_copy && $params_email && isset($_POST['send_copy'])) {
			wp_mail($output['email'], $subject, $body, $headers);
		}
		
		$messageSent = true;
	}

} 

get_header(); 

?>

<div id="primary" class="hfeed">
	<?php the_post(); ?>
	
	<div id="content" class="site-content contact-page" role="main">	
	
		<article>	
			<?php if (get_theme_mod('photo_contact_enable_map', 1) == 1) : ?>
			<div class="gk-map-contact entry-header">
				<div class="gk-map static" data-latitude="<?php echo get_theme_mod('photo_contact_latitude','-34.397'); ?>" data-longitude="<?php echo get_theme_mod('photo_contact_longitude', '150.644'); ?>" data-ui="<?php if(get_theme_mod('photo_contact_enable_ui', 1) == 1) { echo 'yes'; } else { echo ''; } ?>" data-zoom="<?php echo get_theme_mod('photo_contact_map_zoom','8'); ?>"></div>
			</div>		
			<?php endif; ?>
		<div class="site">
			<div class="contact-form">
			<?php if($messageSent == true) : ?>
			<p class="gk-contact-thanks"><?php _e('Your message was sent to us successfully.', 'photo'); ?></p>
			<p><a href="<?php echo home_url(); ?>"><?php _e('Back to the homepage', 'photo'); ?></a></p>
			<?php else : ?>
			
				<?php if(!$validated) : ?>
				<p class="gk-warning"><?php _e('Sorry, an error occured.', 'photo'); ?></p>
				<?php endif; ?>
				
				<h3><?php _e('Contact Form', 'photo'); ?></h3>
				<form action="<?php the_permalink(); ?>" id="gk-contact" method="post">
					<dl>
						<?php if($params_name) : ?>
						<dt>
							<label for="contact-name"><?php _e('Name:', 'photo'); ?></label>
							<?php if($errors['name'] != '') : ?>
							<span class="error"><?php echo $errors['name'];?></span>
							<?php endif; ?>
						</dt>
						<dd>	
							<input type="text" name="contact-name" id="contact-name" value="<?php echo $output['name'];?>" />
						</dd>
						<?php endif; ?>
			
						<?php if($params_email) : ?>
						<dt>
							<label for="email"><?php _e('Email:', 'photo'); ?></label>
							<?php if($errors['email'] != '') : ?>
							<span class="error"><?php echo $errors['email'];?></span>
							<?php endif; ?>
						</dt>
						<dd>	
							<input type="text" name="email" id="email" value="<?php echo $output['email'];?>" />
						</dd>
						<?php endif; ?>
			
						<dt class="gk-message">
							<label for="comment-text"><?php _e('Message:', 'photo'); ?></label>
							<?php if($errors['message'] != '') : ?>
							<span class="error"><?php echo $errors['message'];?></span>
							<?php endif; ?>
						</dt>
						<dd>
							<textarea name="comment-text" id="comment-text" rows="6" cols="30"><?php echo $output['message']; ?></textarea>
						</dd>
					</dl>
					
					<?php if($params_copy && $params_email) : ?>
					<p>
						<label>
							<input type="checkbox" name="send_copy" /> 
							<?php _e('Send copy of the message to yourself', 'photo'); ?>
						</label>
					</p>
					<?php endif; ?>
					
					
					<?php if(
							get_theme_mod('photo_contact_enable_captcha', 0) == 1 &&
							$publickey != '' &&
							$privatekey != ''
						) : ?>
					<p>
						<?php if($errors['recaptcha'] != '') : ?>
						<span class="error"><?php echo $errors['recaptcha'];?></span>
						<?php endif; ?>			
					</p>

					<div class="g-recaptcha" data-sitekey="6LeRNv8SAAAAAId1_L7Ul4NPAI6tLZVEau5MNEjF"></div>
					<?php endif; ?>
					
					<p>
						<input type="submit" value="<?php _e('Send message', 'photo'); ?>" />
					</p>
					<input type="hidden" name="message-send" id="message-send" value="true" />
				</form>
			<?php endif; ?>
			</div>

			<div class="contact-details">
				<?php the_content(); ?>
			</div>
		</div>
		</article>
	</div>
</div>

<?php get_footer(); ?>