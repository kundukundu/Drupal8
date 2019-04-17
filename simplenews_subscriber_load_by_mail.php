<?php
  // If the current user is a subscriber, extend context.
  $user = \Drupal::currentUser();
  if ($user->id() > 0 && $subscriber = simplenews_subscriber_load_by_mail($user->getEmail())) {
    $context['simplenews_subscriber'] = $subscriber;
  }
