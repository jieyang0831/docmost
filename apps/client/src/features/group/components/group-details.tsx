import { useGroupQuery } from "@/features/group/queries/group-query";
import { useParams } from "react-router-dom";
import { Group, Title, Text } from "@mantine/core";
import AddGroupMemberModal from "@/features/group/components/add-group-member-modal";
import React from "react";
import { useDisclosure } from "@mantine/hooks";
import EditGroupModal from "@/features/group/components/edit-group-modal.tsx";
import GroupActionMenu from "@/features/group/components/group-action-menu.tsx";

export default function GroupDetails() {
  const { groupId } = useParams();
  const { data: group, isLoading } = useGroupQuery(groupId);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      {group && (
        <div>
          {/* Todo: back navigation */}
          <Title order={3}>{group.name}</Title>
          <Text c="dimmed">{group.description}</Text>

          <Group my="md" justify="flex-end">
            <AddGroupMemberModal />
            <GroupActionMenu />
          </Group>
        </div>
      )}

      <EditGroupModal opened={opened} onClose={close} />
    </>
  );
}
