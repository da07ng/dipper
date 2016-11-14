define(
   ({
  	
    documentTypes: {
    	data: {
    		caption: "Đ_ISO 19115 (Data)______ớ",
    		description: ""
    	},
    	service: {
    		caption: "Đ_ISO 19119 (Service)_______ớ",
    		description: ""
    	},
    	gmi: {
    		caption: "Đ_ISO 19115-2 (Imagery and Gridded Data)____________ớ",
    		description: ""
    	}
    },
    
    general: {
    	reference: "Đ_Reference____ớ"
    },
    
    sections: {
    	metadata: "Đ_Metadata___ớ",
    	identification: "Đ_Identification_____ớ",
    	distribution: "Đ_Distribution_____ớ",
    	quality: "Đ_Quality___ớ",
    	acquisition: "Đ_Acquisition____ớ"
    },
    
    metadataSection: {
    	identifier: "Đ_Identifier____ớ",
    	contact: "Đ_Contact___ớ",
    	date: "Đ_Date__ớ",
    	standard: "Đ_Standard___ớ",
    	reference: "Đ_Reference____ớ"
    },
    
    identificationSection: {
    	citation: "Đ_Citation___ớ",
    	description: "Đ_Description____ớ",
    	contact: "Đ_Contact___ớ",
    	thumbnail: "Đ_Thumbnail____ớ",
    	keywords: "Đ_Keywords___ớ",
    	constraints: "Đ_Constraints____ớ",
    	resource: "Đ_Resource___ớ",
    	resourceTab: {
    		representation: "Đ_Representation_____ớ",
    		language: "Đ_Language___ớ",
    		classification: "Đ_Classification_____ớ",
    		extent: "Đ_Extent___ớ"
    	},
    	serviceResourceTab: {
    		serviceType: "Đ_Service Type_____ớ",
    		extent: "Đ_Extent___ớ",
    		couplingType: "Đ_Coupling Type_____ớ",
    		operation: "Đ_Operation____ớ",
    		operatesOn: "Đ_Operates On____ớ"
    	}
    },
    
    distributionSection: {
    },
    
    qualitySection: {
    	scope: "Đ_Scope___ớ",
    	conformance: "Đ_Conformance____ớ",
    	lineage: "Đ_Lineage___ớ"
    },
    
    acquisitionSection: {
    	requirement: "Đ_Requirement____ớ",
    	objective: "Đ_Objective____ớ",
    	instrument: "Đ_Instrument____ớ",
    	plan: "Đ_Plan__ớ",
    	operation: "Đ_Operation____ớ",
    	platform: "Đ_Platform___ớ",
    	environment: "Đ_Environment____ớ"
    },
    
    AbstractMD_Identification: {
    	sAbstract: "Đ_Abstract___ớ",
    	purpose: "Đ_Purpose___ớ",
    	credit: "Đ_Credits___ớ",
    	pointOfContact: "Đ_Point of Contact______ớ",
    	resourceMaintenance: "Đ_Maintenance____ớ",
    	graphicOverview: "Đ_Graphic Overview______ớ",
    	descriptiveKeywords: "Đ_Keyword Collection______ớ",
    	resourceConstraints: "Đ_Constraints____ớ"
    },
    
    CI_Address: {
    	deliveryPoint: "Đ_Delivery Point_____ớ",
    	city: "Đ_City__ớ",
    	administrativeArea: "Đ_Administrative Area_______ớ",
    	postalCode: "Đ_Postal Code____ớ",
    	country: "Đ_Country___ớ",
    	electronicMailAddress: "Đ_E-Mail Address_____ớ"
    },
    
    CI_Citation: {
    	title: "Đ_Title___ớ",
    	alternateTitle: "Đ_Alternate Title______ớ",
    	identifier: "Đ_Unique Resource Identifier_________ớ",
    	resource: {
    		title: "Đ_Resource Title_____ớ",
    		date: "Đ_Resource Date_____ớ"
    	},
    	specification: {
    		title: "Đ_Specification Title_______ớ",
    		date: "Đ_Specification Date______ớ"
    	}
    },
    
    CI_Contact: {
    	phone: "Đ_Phone___ớ",
    	address: "Đ_Address___ớ",
    	onlineResource: "Đ_Online Resource______ớ",
    	hoursOfService: "Đ_Hours of Service______ớ",
    	contactInstructions: "Đ_Contact Instructions_______ớ"
    },
    
    CI_Date: {
    	date: "Đ_Date__ớ",
    	dateType: "Đ_Date Type____ớ"
    },
    
  	CI_DateTypeCode: {
  		caption: "Đ_Date Type____ớ",
  		creation: "Đ_Creation Date_____ớ",
  		publication: "Đ_Publication Date______ớ",
  		revision: "Đ_Revision Date_____ớ"
  	},
  	
    CI_OnLineFunctionCode: {
    	caption: "Đ_Function___ớ",
    	download: "Đ_Download___ớ",
    	information: "Đ_Information____ớ",
    	offlineAccess: "Đ_Offline Access_____ớ",
    	order: "Đ_Order___ớ",
    	search: "Đ_Search___ớ"
    },
    
    CI_OnlineResource: {
    	caption: "Đ_Online Resource______ớ",
    	linkage: "Đ_URL__ớ",
    	protocol: "Đ_Protocol___ớ",
    	applicationProfile: "Đ_Application Profile_______ớ",
    	name: "Đ_Name__ớ",
    	description: "Đ_Description____ớ",
    	sFunction: "Đ_Function___ớ"
    },
    
    CI_ResponsibleParty: {
    	caption: "Đ_Point of Contact______ớ",
    	individualName: "Đ_Individual Name______ớ",
    	organisationName: "Đ_Organisation Name______ớ",
    	positionName: "Đ_Position Name_____ớ",
    	contactInfo: "Đ_Contact Info_____ớ",
    	role: "Đ_Role__ớ"
    },
    
    CI_RoleCode: {
    	caption: "Đ_Role__ớ",
    	resourceProvider: "Đ_Resource Provider______ớ",
    	custodian: "Đ_Custodian____ớ",
    	owner: "Đ_Owner___ớ",
    	user: "Đ_User__ớ",
    	distributor: "Đ_Distributor____ớ",
    	originator: "Đ_Originator____ớ",
    	pointOfContact: "Đ_Point of Contact______ớ",
    	principalInvestigator: "Đ_Principal Investigator________ớ",
    	processor: "Đ_Processor____ớ",
    	publisher: "Đ_Publisher____ớ",
    	author: "Đ_Author___ớ"
    },
    
    CI_Telephone: {
    	voice: "Đ_Voice___ớ",
    	facsimile: "Đ_Fax__ớ"
    },
    
    DCPList: {
    	caption: "Đ_DCP__ớ",
    	XML: "Đ_XML__ớ",
    	CORBA: "Đ_CORBA___ớ",
    	JAVA: "Đ_JAVA__ớ",
    	COM: "Đ_COM__ớ",
    	SQL: "Đ_SQL__ớ",
    	WebServices: "Đ_WebServices____ớ"
    },
    
    DQ_ConformanceResult: {
    	caption: "Đ_Conformance Result______ớ",
    	explanation: "Đ_Explanation____ớ",
    	degree: {
    		caption: "Đ_Degree___ớ",
    		validationPerformed: "Đ_Validation Performed_______ớ",
    		conformant: "Đ_Conformant____ớ",
    		nonConformant: "Đ_Non Conformant_____ớ"
    	}
    },
    
    DQ_DataQuality: {
    	report: "Đ_Report___ớ"
    },
    
    DQ_Scope : {
    	level: "Đ_Scope (quality information applies to)____________ớ",
    	levelDescription: "Đ_Level Description______ớ"
    },
    
    EX_Extent: {
    	caption: "Đ_Extent___ớ",
    	description: "Đ_Description____ớ",
    	geographicElement: "Đ_Spatial Extent_____ớ",
    	temporalElement: "Đ_Temporal Extent______ớ",
    	verticalElement: "Đ_Vertical Extent______ớ"
    },
    
    EX_GeographicBoundingBox: {
    	westBoundLongitude: "Đ_West Bounding Longitude________ớ",
    	eastBoundLongitude: "Đ_East Bounding Longitude________ớ",
    	southBoundLatitude: "Đ_South Bounding Latitude________ớ",
    	northBoundLatitude: "Đ_North Bounding Latitude________ớ"
    },
    
    EX_GeographicDescription: {
    	caption: "Đ_Geographic Description________ớ"
    },
    
    EX_TemporalExtent: {
    	TimePeriod: {
    		beginPosition: "Đ_Begin Date____ớ",
    		endPosition: "Đ_End Date___ớ"
    	}
    },
    
    EX_VerticalExtent: {
    	minimumValue: "Đ_Minimum Value_____ớ",
    	maximumValue: "Đ_Maximum Value_____ớ",
    	verticalCRS: "Đ_Vertical CRS_____ớ"
    },
    
    Length: {
    	caption: "Đ_Length___ớ",
    	uom: "Đ_Units of Measure______ớ",
    	km: "Đ_Kilometers____ớ",
    	m: "Đ_Meters___ớ",
    	mi: "Đ_Miles___ớ",
    	ft: "Đ_Feet__ớ"
    },
    
    LI_Lineage: {
    	statement: "Đ_Lineage Statement______ớ"
    },
    
    MD_BrowseGraphic: {
    	fileName: "Đ_Browse Graphic URL______ớ",
    	fileDescription: "Đ_Browse Graphic Caption________ớ",
    	fileType: "Đ_Browse Graphic Type_______ớ"
    },
    
    MD_ClassificationCode: {
    	unclassified: "Đ_Unclassified_____ớ",
    	restricted: "Đ_Restricted____ớ",
    	confidential: "Đ_Confidential_____ớ",
    	secret: "Đ_Secret___ớ",
    	topSecret: "Đ_Top Secret____ớ"
    },
    
    MD_Constraints: {
    	caption: "Đ_Usage Constraints______ớ",
    	useLimitation: "Đ_Use Limitation_____ớ"
    },
    
    MD_DataIdentification: {
    	spatialRepresentationType: "Đ_Spatial Representation Type_________ớ",
    	spatialResolution: "Đ_Spatial Resolution______ớ",
    	language: "Đ_Resource Language______ớ",
    	supplementalInformation: "Đ_Supplemental_____ớ"
    },
    
    MD_DigitalTransferOptions: {
    	onLine: "Đ_Online___ớ"
    },
    
    MD_Distribution: {
    	distributionFormat: "Đ_Distribution Format_______ớ",
    	transferOptions: "Đ_Transfer Options______ớ"
    },
    
    MD_Format: {
    	name: "Đ_Format Name____ớ",
    	version: "Đ_Format Version_____ớ"
    },
    
    MD_Identifier: {
    	caption: "Đ_URI__ớ",
    	identifierCaption: "Đ_Identifier____ớ",
    	code: "Đ_Code__ớ"
    },
    
    MD_Keywords: {
    	delimitedCaption: "Đ_Keywords___ớ",
    	thesaurusName: "Đ_Associated Thesaurus_______ớ"
    },
    
    MD_KeywordTypeCode: {
    	caption: "Đ_Keyword Type_____ớ",
    	discipline: "Đ_Discipline____ớ",
    	place: "Đ_Place___ớ",
    	stratum: "Đ_Stratum___ớ",
    	temporal: "Đ_Temporal___ớ",
    	theme: "Đ_Theme___ớ"
    },
    
    MD_LegalConstraints: {
    	caption: "Đ_Legal Constraints______ớ",
    	accessConstraints: "Đ_Access Constraints______ớ",
    	useConstraints: "Đ_Use Constraints______ớ",
    	otherConstraints: "Đ_Other Constraints______ớ"
    },
    
    MD_MaintenanceFrequencyCode: {
    	caption: "Đ_Frequency____ớ",
    	continual: "Đ_Continual____ớ",
    	daily: "Đ_Daily___ớ",
    	weekly: "Đ_Weekly___ớ",
    	fortnightly: "Đ_Fortnightly____ớ",
    	monthly: "Đ_Monthly___ớ",
    	quarterly: "Đ_Quarterly____ớ",
    	biannually: "Đ_Biannually____ớ",
    	annually: "Đ_Annually___ớ",
    	asNeeded: "Đ_As Needed____ớ",
    	irregular: "Đ_Irregular____ớ",
    	notPlanned: "Đ_Not Planned____ớ",
    	unknown: "Đ_Unknown___ớ"
    },
    
    MD_Metadata: {
    	caption: "Đ_Metadata___ớ",
    	fileIdentifier: "Đ_File Identifier______ớ",
    	language: "Đ_Metadata Language______ớ",
    	hierarchyLevel: "Đ_Hierarchy Level______ớ",
    	hierarchyLevelName: "Đ_Hierarchy Level Name_______ớ",
    	contact: "Đ_Metadata Contact______ớ",
    	dateStamp: "Đ_Metadata Date_____ớ",
    	metadataStandardName: "Đ_Metadata Standard Name________ớ",
    	metadataStandardVersion: "Đ_Metadata Standard Version_________ớ",
    	referenceSystemInfo: "Đ_Reference System______ớ",
    	identificationInfo: "Đ_Identification_____ớ",
    	distributionInfo: "Đ_Distribution_____ớ",
    	dataQualityInfo: "Đ_Quality___ớ"
    },
    
    MD_ProgressCode: {
    	caption: "Đ_Progress Code_____ớ",
    	completed: "Đ_Completed____ớ",
    	historicalArchive: "Đ_Historical Archive______ớ",
    	obsolete: "Đ_Obsolete___ớ",
    	onGoing: "Đ_On Going___ớ",
    	planned: "Đ_Planned___ớ",
    	required: "Đ_Required___ớ",
    	underDevelopment: "Đ_Under Development______ớ"
    },
    
    MD_RepresentativeFraction: {
    	denominator: "Đ_Denominator____ớ"
    },
    
    MD_Resolution: {
    	equivalentScale: "Đ_Equivalent Scale______ớ",
    	distance: "Đ_Distance___ớ"
    },
    
    MD_RestrictionCode: {
    	copyright: "Đ_Copyright____ớ",
    	patent: "Đ_Patent___ớ",
    	patentPending: "Đ_Patent Pending_____ớ",
    	trademark: "Đ_Trademark____ớ",
    	license: "Đ_License___ớ",
    	intellectualPropertyRights: "Đ_Intellectual Property Rights_________ớ",
    	restricted: "Đ_Restricted____ớ",
    	otherRestrictions: "Đ_Other Restrictions______ớ"
    },
    
    MD_ScopeCode: {
    	attribute: "Đ_Attribute____ớ",
    	attributeType: "Đ_Attribute type_____ớ",
    	collectionHardware: "Đ_Collection hardware_______ớ",
    	collectionSession: "Đ_Collection session______ớ",
    	dataset: "Đ_Dataset___ớ",
    	series: "Đ_Series___ớ",
    	nonGeographicDataset: "Đ_Non geographic dataset________ớ",
    	dimensionGroup: "Đ_Dimension group______ớ",
    	feature: "Đ_Feature___ớ",
    	featureType: "Đ_Feature type_____ớ",
    	propertyType: "Đ_Property type_____ớ",
    	fieldSession: "Đ_Field session_____ớ",
    	software: "Đ_Software___ớ",
    	service: "Đ_Service___ớ",
    	model: "Đ_Model___ớ",
    	tile: "Đ_Tile__ớ"
    },
    
    MD_ScopeDescription: {
    	attributes: "Đ_Attributes____ớ",
    	features: "Đ_Features___ớ",
    	featureInstances: "Đ_Feature Instances______ớ",
    	attributeInstances: "Đ_Attribute Instances_______ớ",
    	dataset: "Đ_Dataset___ớ",
    	other: "Đ_Other___ớ"
    },
    
    MD_SecurityConstraints: {
    	caption: "Đ_Security Constraints_______ớ",
    	classification: "Đ_Classification_____ớ",
    	userNote: "Đ_User Note____ớ",
    	classificationSystem: "Đ_Classification System_______ớ",
    	handlingDescription: "Đ_Handling Description_______ớ"
    },
    
    MD_SpatialRepresentationTypeCode: {
    	caption: "Đ_Spatial Representation Type_________ớ",
    	vector: "Đ_Vector___ớ",
    	grid: "Đ_Grid__ớ",
    	textTable: "Đ_Text Table____ớ",
    	tin: "Đ_TIN__ớ",
    	stereoModel: "Đ_Stereo Model_____ớ",
    	video: "Đ_Video___ớ"
    },
    
    MD_TopicCategoryCode: {
    	caption: "Đ_Topic Category_____ớ",
    	boundaries: "Đ_Administrative and Political Boundaries_____________ớ",
    	farming: "Đ_Agriculture and Farming________ớ",
    	climatologyMeteorologyAtmosphere: "Đ_Atmosphere and Climatic________ớ",
    	biota: "Đ_Biology and Ecology_______ớ",
    	economy: "Đ_Business and Economic_______ớ",
    	planningCadastre: "Đ_Cadastral____ớ",
    	society: "Đ_Cultural, Society and Demography___________ớ",
    	elevation: "Đ_Elevation and Derived Products__________ớ",
    	environment: "Đ_Environment and Conservation_________ớ",
    	structure: "Đ_Facilities and Structures_________ớ",
    	geoscientificInformation: "Đ_Geological and Geophysical_________ớ",
    	health: "Đ_Human Health and Disease________ớ",
    	imageryBaseMapsEarthCover: "Đ_Imagery and Base Maps_______ớ",
    	inlandWaters: "Đ_Inland Water Resources________ớ",
    	location: "Đ_Locations and Geodetic Networks__________ớ",
    	intelligenceMilitary: "Đ_Military___ớ",
    	oceans: "Đ_Oceans and Estuaries_______ớ",
    	transportation: "Đ_Transportation Networks________ớ",
    	utilitiesCommunication: "Đ_Utilities and Communication_________ớ"
    },
    
    MI_ContextCode: {
    	caption: "Đ_Context___ớ",
    	acquisition: "Đ_Acquisition____ớ",
    	pass: "Đ_Pass__ớ",
    	wayPoint: "Đ_Waypoint___ớ"
    },
    
    MI_EnvironmentalRecord: {
    	caption: "Đ_Environmental Conditions________ớ",
    	averageAirTemperature: "Đ_Average Air Temperature________ớ",
    	maxRelativeHumidity: "Đ_Maximum Relative Humidity_________ớ",
    	maxAltitude: "Đ_Maximum Altitude______ớ",
    	meterologicalConditions: "Đ_Meterological Conditions________ớ"
    },
    
    MI_Event: {
    	identifier: "Đ_Event Identifier______ớ",
    	time: "Đ_Time__ớ",
    	expectedObjectiveReference: "Đ_Expected Objective (Objective Identifer)_____________ớ",
    	relatedSensorReference: "Đ_Related Sensor (Instrument Identifer)____________ớ",
    	relatedPassReference: "Đ_Related Pass (Platform Pass Identifer)____________ớ"
    },

    MI_GeometryTypeCode: {
    	point: "Đ_Point___ớ",
    	linear: "Đ_Linear___ớ",
    	areal: "Đ_Areal___ớ",
    	strip: "Đ_Strip___ớ"
    },
    
    MI_Instrument: {
    	citation: "Đ_Instrument Citation_______ớ",
    	identifier: "Đ_Instrument Identifier_______ớ",
    	sType: "Đ_Instrument Type______ớ",
    	description: "Đ_Instrument Description________ớ",
    	mountedOn: "Đ_Mounted On____ớ",
    	mountedOnPlatformReference: "Đ_Mounted On (Platform Identifier)___________ớ"
    },
    
    MI_Metadata: {
    	acquisitionInformation: "Đ_Acquisition____ớ"
    },
    
    MI_Objective: {
    	caption: "Đ_Objective____ớ",
    	identifier: "Đ_Objective Identifier_______ớ",
    	priority: "Đ_Priority of Target______ớ",
    	sFunction: "Đ_Function of Objective_______ớ",
    	extent: "Đ_Extent___ớ",
    	pass: "Đ_Platform Pass_____ớ",
    	sensingInstrumentReference: "Đ_Sensing Instrument (Instrument Identifier)______________ớ",
    	objectiveOccurrence: "Đ_Events___ớ",
    	sections: {
    		identification: "Đ_Identification_____ớ",
    		extent: "Đ_Extent___ớ",
    		pass: "Đ_Pass__ớ",
    		sensingInstrument: "Đ_Sensing Instrument______ớ",
    		objectiveOccurrence: "Đ_Events___ớ"
    	}
    },
    
    MI_ObjectiveTypeCode: {
    	caption: "Đ_Type (Collection Technique for Objective)_____________ớ",
    	instantaneousCollection: "Đ_Instantaneous Collection________ớ",
    	persistentView: "Đ_Persistent View______ớ",
    	survey: "Đ_Survey___ớ"
    },
    
    MI_Operation: {
    	caption: "Đ_Operation____ớ",
    	description: "Đ_Operation Description_______ớ",
    	citation: "Đ_Operation Citation______ớ",
    	identifier: "Đ_Operation Identifier_______ớ",
    	status: "Đ_Operation Status______ớ",
    	objectiveReference: "Đ_Related Objective (Objective Identifier)_____________ớ",
    	planReference: "Đ_Related Plan (Plan Identifier)__________ớ",
    	significantEventReference: "Đ_Related Event (Event Identifier)___________ớ",
    	platformReference: "Đ_Related Platform (Platform Identifier)____________ớ",
    	sections: {
    		identification: "Đ_Identification_____ớ",
    		related: "Đ_Related___ớ"
    	}
    },
    
    MI_OperationTypeCode: {
    	caption: "Đ_Operation Type_____ớ",
    	real: "Đ_Real__ớ",
    	simulated: "Đ_Simulated____ớ",
    	synthesized: "Đ_Synthesized____ớ"
    },
    
    MI_Plan: {
    	sType: "Đ_Sampling Geometry for Collecting Data____________ớ",
    	status: "Đ_Status of Plan_____ớ",
    	citation: "Đ_Citation of Authority Requesting Collection______________ớ",
    	satisfiedRequirementReference: "Đ_Satisfied Requirement (Requirement Identifier)_______________ớ",
    	operationReference: "Đ_Related Operation (Operation Identifier)_____________ớ"
    },
    
    MI_Platform: {
    	citation: "Đ_Platform Citation______ớ",
    	identifier: "Đ_Platform Identifier_______ớ",
    	description: "Đ_Description of Platform Supporting the Instrument________________ớ",
    	sponsor: "Đ_Sponsor Organization for Platform___________ớ",
    	instrument: "Đ_Instrument(s) mounted on the platform____________ớ",
    	instrumentReference: "Đ_Instrument Identifier_______ớ",
    	sections: {
    		identification: "Đ_Identification_____ớ",
    		sponsor: "Đ_Sponsor___ớ",
    		instruments: "Đ_Instruments____ớ"
    	}
    },
    
    MI_PlatformPass: {
    	identifier: "Đ_Platform Pass Identifier________ớ",
    	extent: "Đ_Platform Pass Extent_______ớ",
    	relatedEventReference: "Đ_Related Event (Event Identifer)__________ớ"
    },

    MI_PriorityCode: {
    	critical: "Đ_Critical___ớ", 
    	highImportance: "Đ_High Importance______ớ",
    	mediumImportance: "Đ_Medium Importance______ớ",
    	lowImportance: "Đ_Low Importance_____ớ"
    },
    
    MI_RequestedDate : {
    	requestedDateOfCollection: "Đ_Requested Date Of Collection_________ớ",
    	latestAcceptableDate: "Đ_Latest Acceptable Date________ớ"
    },
    
    MI_Requirement: {
    	caption: "Đ_Requirement____ớ",
    	citation: "Đ_Citation for Requirement Guidance Material______________ớ",
    	identifier: "Đ_Requirement Identifier________ớ",
    	requestor: "Đ_Requestor of Requirement________ớ",
    	recipient: "Đ_Recipient of Requirement Results___________ớ",
    	priority: "Đ_Requirement Priority_______ớ",
    	requestedDate: "Đ_Requested Date_____ớ",
    	expiryDate: "Đ_Expiry Date____ớ",
    	satisifiedPlanReference: "Đ_Satisfied Plan (Plan Identifier)___________ớ",
    	sections: {
    		identification: "Đ_Identification_____ớ",
    		requestor: "Đ_Requestor____ớ",
    		recipient: "Đ_Recipient____ớ",
    		priorityAndDates: "Đ_Priority And Dates______ớ",
    		satisifiedPlan: "Đ_Satisified  Plan______ớ"
    	}
    },
    
    MI_SequenceCode: {
    	caption: "Đ_Sequence___ớ",
    	start: "Đ_Start___ớ",
    	end: "Đ_End__ớ",
    	instantaneous: "Đ_Instantaneous_____ớ"
    },
    
    MI_TriggerCode: {
    	caption: "Đ_Trigger___ớ",
    	automatic: "Đ_Automatic____ớ",
    	manual: "Đ_Manual___ớ",
    	preProgrammed: "Đ_Preprogrammed_____ớ"
    },
    
    ObjectReference: {
    	uuidref: "Đ_UUID Reference_____ớ",
    	xlinkref: "Đ_URL Reference_____ớ"
    },
    
    RS_Identifier: {
    	caption: "Đ_ID Plus Code Space______ớ",
    	code: "Đ_Code__ớ",
    	codeSpace: "Đ_Code Space____ớ"
    },
    
    SV_CouplingType: {
    	loose: "Đ_Loose___ớ",
    	mixed: "Đ_Mixed___ớ",
    	tight: "Đ_Tight___ớ"
    },
    
    SV_OperationMetadata: {
    	operationName: "Đ_Operation Name_____ớ",
    	DCP: "Đ_DCP__ớ",
    	connectPoint: "Đ_Connect Point_____ớ"
    },
    
    SV_ServiceIdentification: {
    	serviceType: "Đ_ServiceType____ớ",
    	couplingType: "Đ_Coupling Type_____ớ",
    	containsOperations: "Đ_Operation Metadata______ớ",
    	operatesOn: "Đ_Operates On____ớ"
    },
    
    TM_Primitive: {
    	indeterminatePosition: "Đ_Indeterminate Position________ớ",
    	indeterminates: {
    		before: "Đ_Before___ớ",
       	after: "Đ_After___ớ",
      	now: "Đ_Now__ớ",
      	unknown: "Đ_Unknown___ớ"
    	}
    },
    
    gemet: {
    	concept: {
    		gemetConceptKeyword: "Đ_GEMET Concept Keyword_______ớ",
    		tool: "Đ_Look Up____ớ...",
    		dialogTitle: "Đ_GEMET - Concept Keyword________ớ",
    		searchLabel: "Đ_Search___ớ:",
    		searchTip: "Đ_Search GEMET_____ớ"
    	},
    	theme: {
    		tool: "Đ_Look Up____ớ...",
    		dialogTitle: "Đ_GEMET - Inspire Data Theme_________ớ"
    	},
    	ioerror: "Đ_There was an error communicating with the GEMET service: {url}____________________ớ",
    	searching: "Đ_Searching GEMET______ớ...",
    	noMatch: "Đ_No matching results were found__________ớ.",
      languages: {
      	"bg": "Đ_Bulgarian____ớ",
      	"cs": "Đ_Czech___ớ",
      	"da": "Đ_Danish___ớ",
      	"nl": "Đ_Dutch___ớ",
      	"en": "Đ_English___ớ",
      	"et": "Đ_Estonian___ớ",
      	"fi": "Đ_Finnish___ớ",
      	"fr": "Đ_French___ớ",
      	"de": "Đ_German___ớ",
      	"el": "Đ_Greek___ớ",
      	"hu": "Đ_Hungarian____ớ",
      	"ga": "Đ_Gaelic (Irish)_____ớ",
      	"it": "Đ_Italian___ớ",
      	"lv": "Đ_Latvian___ớ",
      	"lt": "Đ_Lithuanian____ớ",
      	"mt": "Đ_Maltese___ớ",
      	"pl": "Đ_Polish___ớ", 
      	"pt": "Đ_Portuguese____ớ",
      	"ro": "Đ_Romanian___ớ",
      	"sk": "Đ_Slovak___ớ",
      	"sl": "Đ_Slovenian____ớ",  	
      	"es": "Đ_Spanish___ớ",
      	"sv": "Đ_Swedish___ớ"
      }
    }
   
  })
);
