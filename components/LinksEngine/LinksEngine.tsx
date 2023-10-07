'use client';

import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import AddLinkForm from '@/components/AddLinkForm';
import LinkEditForm from '@/components/LinkEditForm';
import type { DropResult } from '@hello-pangea/dnd';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { useRouter } from 'next/navigation';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import updateLinksOrder from './updateLinksOrder';

const reorder = <T, >(list: T[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

type LinkEngineLink = {
  id: string
  name: string
  url: string
  active?: boolean | null
  ordinal?: number | null
};

export type LinksEngineProps = {
  links: LinkEngineLink[]
};

const LinksEngine: React.FC<LinksEngineProps> = ({ links }) => {
  const router = useRouter();
  const [data, setData] = useState(links);
  useEffect(() => {
    setData(links);
  }, [links]);
  const reorderLinks = async (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    const items = reorder(
      data,
      result.source.index,
      result.destination.index,
    );
    setData(items);
    await updateLinksOrder(items.map((item, index) => ({
      id: item.id,
      ordinal: index,
    })));
    router.refresh();
  };
  return (
    <DragDropContext onDragEnd={reorderLinks}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <AddLinkForm />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Droppable droppableId="links">
            {(droppable) => (
              <List
                ref={droppable.innerRef}
                {...droppable.droppableProps}
                dense
                disablePadding
              >
                {data.map((link, index) => (
                  <Draggable
                    draggableId={link.id}
                    key={link.id}
                    index={index}
                  >
                    {(draggable) => (
                      <ListItem
                        ref={draggable.innerRef}
                        {...draggable.draggableProps}
                        {...draggable.dragHandleProps}
                        dense
                      >
                        <ListItemIcon sx={{ minWidth: 'fit-content', mr: 1 }}>
                          <DragHandleIcon />
                        </ListItemIcon>
                        <LinkEditForm
                          key={link.id}
                          link={link}
                          onDelete={() => {
                            setData((prev) => prev.filter((item) => item.id !== link.id));
                          }}
                        />
                      </ListItem>
                    )}
                  </Draggable>
                ))}
                {droppable.placeholder}
              </List>
            )}
          </Droppable>
        </Grid>
      </Grid>
    </DragDropContext>
  );
};

export default LinksEngine;
