import { QuartzFilterPlugin } from "../types"

export const RemoveTags: QuartzFilterPlugin<{ tags: string[] }> = (
  opts: { tags: string[] } | undefined,
) => ({
  name: "RemoveTags",
  shouldPublish(_ctx, [_tree, vfile]) {
    const hasTags = vfile.data?.frontmatter?.tags?.filter((tag: string) => {
      return opts != undefined && opts.tags.indexOf(tag) >= 0
    })
    return !hasTags || hasTags.length == 0
  },
})
