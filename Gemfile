source "https://rubygems.org"

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows


# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", :platforms => [:mingw, :x64_mingw, :mswin, :jruby]

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", ">= 1.1.0", :require => false

gem "jekyll", "~> 4.3.2"
gem "webrick", "~> 1.8"

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-sitemap", "~> 1.4.0"
  gem "jekyll-gist", "~> 1.5"
  gem "jekyll-include-cache", "~> 0.2.1"
end
