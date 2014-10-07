var message = {
	last_ver: 4.0,
	package_url: 'https://arestov.github.io/su_update_iframe/packages/install-pack-test.zip'
};
if (window.parent) {
	window.parent.postMessage(message, '*');
}
