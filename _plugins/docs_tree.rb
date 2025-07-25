module Jekyll
  class DocsTreeGenerator < Generator
		def generate(site)
			site.data["docs_tree"] = "ciao"
			# this is a debug comment print in terminal
			puts "Value set: #{site.data['docs_tree'].inspect}".blue
		end
	end
end