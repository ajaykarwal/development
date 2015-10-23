define(['jquery', 'jquery-easing', 'snap', 'svg-icons'], function ($) {
    return {
        svgIconConfig: {
            hamburger: {
                url: '/guidelines/UI/Images/IconMenu.svg',
                animation: [
                    {
                        el: 'path:nth-child(1)',
                        animProperties: {
                            from: { val: '{"path" : "M0,32h64"}' },
                            to: { val: '{"path" : "M5.2,58.8L59.5,4.5"}' }
                        }
                    },
                    {
                        el: 'path:nth-child(2)',
                        animProperties: {
                            from: { val: '{"transform" : "s1 1", "opacity": "1"}', before: '{"transform" : "s0 0"}' },
                            to: { val: '{"opacity" : 0}' }
                        }
                    },
                    {
                        el: 'path:nth-child(3)',
                        animProperties: {
                            from: { val: '{"path" : "M0,58.1h64"}' },
                            to: { val: '{"path" : "M4.4,4.4l55,55"}' }
                        }
                    }
                ]
            }
        },
        $elem: $('nav[role=navigation]'),
        $wrapper: $('#wrapper'), 
        navWidth: 0, 
        $toggle: null,
        $toggleText: null, 
        time: 200, 
        init: function() {
            var self = this;
            self.$toggle = self.$elem.find('button');
            self.$toggleText = self.$elem.find('span');
            self.$nav = self.$elem.children('ul');
            self.navWidth = self.$nav.outerWidth();

            self.setUpIcon();

            self.$toggle.on('click', function () {
                var $this = $(this);
                if ($this.hasClass('is-active')) {
                    self.closeNav($this);
                }
                else {
                    self.openNav($this);
                }
            })
        },
        setUpIcon: function() {
            var self = this;
            new svgIcon(self.$toggle[0], self.svgIconConfig);
        },
        animateToggle: function (resultText) {
            var self = this,
                travelDistance = (self.$toggleText.outerWidth() + 2) * -1;

            if (resultText == 'Close') {
                self.$toggleText.wrapInner('<span class="inner"></span>');
            }

            self.$toggleText.find('span.inner').animate({
                right: travelDistance
            }, self.time / 2, function () {
                $(this).html(resultText).animate({
                    right: 0
                }, self.time / 2, function() {
                    if(resultText == 'Menu') {
                        self.$toggleText.html(resultText); // Remove span.inner
                    }
                });
            });
        }, 
        openNav: function ($this) {
            var self = this;

            $this.addClass('is-active');
            self.animateToggle('Close');
            
			self.$nav.animate({'right': '0'}, self.time);
			self.$wrapper.animate({'left': '-' + self.navWidth}, self.time);
        },
        closeNav: function ($this) {
            var self = this;

            $this.removeClass('is-active');
            self.animateToggle('Menu');
            
			self.$nav.animate({'right': '-' + self.navWidth }, self.time);
			self.$wrapper.animate({'left': '0'}, self.time);	
        }
    }
});