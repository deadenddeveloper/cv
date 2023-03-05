const EVENT_SOCIAL_LINK = 'social_click';

export const gtmPushEvent = (event, attrs) => {
	dataLayer.push({ event, ...attrs });
};

export const gtmPushSocialLink = attrs => {
	gtmPushEvent(EVENT_SOCIAL_LINK, attrs);
};
