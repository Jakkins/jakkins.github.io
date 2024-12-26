Jekyll::Hooks.register :site, :pre_render do |site|
    directories = Dir.glob(File.join(site.source, 'docs', '*')).select { |f| File.directory?(f) }
    site.data['directories'] = directories.map { |dir| File.basename(dir) }
  end