"use client";

import { cn } from "@/lib/utils";
import { ImageIcon, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "./Button";

interface ImageUploadProps {
  value?: File | string;
  onChange: (event: { target: { name?: string; value: File | null } }) => void;
  className?: string;
  name?: string;
}

const ImageUpload = ({
  value,
  onChange,
  className,
  name,
}: ImageUploadProps) => {
  const [preview, setPreview] = useState<string | undefined>(
    typeof value === "string" ? value : undefined
  );

  useEffect(() => {
    if (typeof value === "string") {
      setPreview(value);
    }
  }, [value]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const previewUrl = reader.result as string;
          setPreview(previewUrl);
          onChange({
            target: {
              name: name,
              value: file,
            },
          });
        };
        reader.readAsDataURL(file);
      }
    },
    [onChange, name]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif"],
    },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024, // 10MB
  });

  const handleRemove = () => {
    setPreview(undefined);
    onChange({
      target: {
        value: null,
      },
    });
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div
        {...getRootProps()}
        className={cn(
          "border-2 border-dashed rounded-lg p-4 hover:bg-gray-50 transition cursor-pointer",
          isDragActive && "border-primary bg-gray-50"
        )}
      >
        <input {...getInputProps()} />
        {preview ? (
          <div className="relative aspect-video w-full">
            <Image
              src={preview}
              alt="Preview"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 text-gray-500">
            <ImageIcon className="h-8 w-8" />
            <div className="text-sm text-center">
              {isDragActive ? (
                <p>Drop the image here</p>
              ) : (
                <p>
                  Drag and drop an image here, or click to select
                  <br />
                  <span className="text-xs">
                    PNG, JPG, JPEG, GIF up to 10MB
                  </span>
                </p>
              )}
            </div>
          </div>
        )}
      </div>
      {preview && (
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={handleRemove}
          className="w-full"
        >
          <X className="h-4 w-4 mr-2" />
          Remove Image
        </Button>
      )}
    </div>
  );
};

export default ImageUpload;
