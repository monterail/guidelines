
## Guidelines

SECTIONS = [
  ["Guidelines", [
    ["Ruby", "ruby"],
    ["Ruby on Rails", "rails"],
    ["JavaScript", "javascript"],
    ["CSS", "stylesheets"],
    ["HMTL", "html"],
    ["Git", "git"],
    ["Open Source", "open_source"]
  ]],
  ["Extras", [
    ["Checklists", "checklist"],
    ["Tools", "tools"],
    ["Gems", "gems"],
    ["Mac", "mac"]
  ]]
]

# * [Ruby](#ruby)
# * [Ruby on Rails](#rails)
# * [JavaScript](javascript.md)
# * [CSS](stylesheets.md)
# * [HTML](html.md)
# * [Git](git.md)
# * [Open Source](open_source.md)

# ## Extras

# * [Checklists](checklist.md)
# * [Tools](tools.md)
# * [Gems](gems.md)
# * [Mac](mac.md)

def content(file)
  File.read(File.join("sections/#{file}.md"))
end

def header(title)
  "\n\n## #{title}\n\n"
end

def section(title, file)
  header(title) + content(file)
end

def li(title)
  id = title.downcase.gsub(" ", "-")
  "* [#{title}](##{id})\n"
end

def toc
  toc = ""
  SECTIONS.each do |head, sections|
    toc << header(head)
    sections.each do |title, _|
      # puts title.inspect
      # puts li(title).inspect
      toc << li(title)
    end
  end
  toc
end

desc "Generate README.md"
task :readme do
  File.open("README.md", "w") do |readme|
    readme << content("header")
    readme << toc

    SECTIONS.each do |head, sections|
      sections.each do |title, file|
        readme << section(title, file)
      end
    end

    readme << content("footer")
  end
end

task :default => :readme
