export enum HttpStatus {
	/* Generic success response.*/
	OK = 200,
	/* A resource has been successfully created. Use for POST.*/
	CREATED = 201,
	/* The request is successful but there is nothing to return.*/
	NO_CONTENT = 204,
	/* Request could not be understood by the server*/
	BAD_REQUEST = 400,
	/* Authentication required*/
	UNAUTHORIZED = 401,
	/* The client is not authorised to access the resource*/
	FORBIDDEN = 403,
	NOT_FOUND = 404,
	/* A conflict has been found. For example, the request conflicts with an already existing data.*/
	CONFLICT = 409,
	/* There might be something wrong with the server.*/
	INTERNAL_SERVER_ERROR = 500,
	NOT_IMPLEMENTED = 501,
}
