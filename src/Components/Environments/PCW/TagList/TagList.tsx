import React, { FC } from 'react'
import { TagType } from 'types'
import { TagListStyle, TagStyle } from './TagListStyle'

export interface TagListProps {
  tags?: TagType[]
}

const TagList: FC<TagListProps> = ({ tags }) => (
  <TagListStyle>
    {tags?.map((tag, i) => (
      <TagStyle
        tagColor={tag.color}
        tagColorType={tag.tagColorType}
        // eslint-disable-next-line react/no-array-index-key
        key={`tag${i}`}
      >
        {tag.text}
      </TagStyle>
    ))}
  </TagListStyle>
)

export default TagList
