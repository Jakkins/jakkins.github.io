source "https://rubygems.org"

# cannot use plugin with github-pages
gem "github-pages", group: :jekyll_plugins

# gem "jekyll", "~> 4.3"

group :jekyll_plugins do
	gem "jekyll-feed", "~> 0.12"
=begin     
	gem "jemoji", "0.13.0"
    gem "jekyll-mentions", "1.6.0"
    gem "jekyll-relative-links", "0.6.1"
    gem "jekyll-optional-front-matter", "0.3.2"
    gem "jekyll-readme-index", "0.3.0"
    gem "jekyll-default-layout", "0.1.5"
    gem "jekyll-titles-from-headings", "0.5.3" 
=end
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :windows, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1", :platforms => [:windows]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]