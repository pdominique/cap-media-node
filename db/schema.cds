namespace media;

entity Pictures {
  key ID : UUID;
  @Core.MediaType: mediaType
  content : LargeBinary;
  @Core.IsMediaType: true
  mediaType : String;
}