import {
  Title,
  Flex,
  TextInput,
  Grid,
  Group,
  rem,
  Checkbox,
  Button,
  Text,
  Image,
} from "@mantine/core";
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { IconUpload, IconX, IconPhoto } from "@tabler/icons-react";
import { FormEvent, useState } from "react";
import { createCriminal } from "../services/criminals";

function CriminalForm() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log(data);

    createCriminal(data).then(console.log);
  }

  return (
    <>
      <Title order={1} my={"xl"}>
        New criminal
      </Title>
      <form onSubmit={handleSubmit}>
        <Flex direction={"column"} gap={"lg"}>
          <TextInput
            name="name"
            label="Name"
            description="Criminal known name"
          />
          <TextInput name="nickname" label="Nickname" />
          <TextInput name="description" label="Description" />

          <Checkbox name="isUnderArrest" label="is under arrest?" />
          <Button type="submit" color="green" className="ml-auto">
            Add
          </Button>
        </Flex>
      </form>
    </>
  );
}

function ImageUploadFormField() {
  const [image, setImage] = useState<FileWithPath>();

  let preview = null;

  if (image) {
    const imageUrl = URL.createObjectURL(image);
    preview = (
      <Image
        h={200}
        fit="contain"
        src={imageUrl}
        radius={"md"}
        onLoad={() => URL.revokeObjectURL(imageUrl)}
      />
    );
  }

  return (
    <Grid>
      <Grid.Col span={"auto"}>
        <Dropzone
          onDrop={(file) => {
            // console.log("accepted file", file);
            setImage(file[0]);
          }}
          onReject={(files) => console.log("rejected files", files)}
          maxSize={3 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
          multiple={false}
          name="img"
        >
          <Group
            justify="center"
            gap="xl"
            mih={220}
            style={{ pointerEvents: "none" }}
          >
            <Dropzone.Accept>
              <IconUpload
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: "var(--mantine-color-blue-6)",
                }}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: "var(--mantine-color-red-6)",
                }}
                stroke={1.5}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconPhoto
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: "var(--mantine-color-dimmed)",
                }}
                stroke={1.5}
              />
            </Dropzone.Idle>

            <div>
              <Text size="xl" inline>
                Drag images here or click to select files
              </Text>
              <Text size="sm" c="dimmed" inline mt={7}>
                Attach as many files as you like, each file should not exceed
                5mb
              </Text>
            </div>
          </Group>
        </Dropzone>
      </Grid.Col>
      <Grid.Col span={"auto"}>
        <div className="mt-10  ">{preview}</div>
      </Grid.Col>
    </Grid>
  );
}

export default CriminalForm;
