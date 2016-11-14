define(
   ({
  	
    documentTypes: {
    	data: {
    		caption: "Ĳ_ISO 19115 (Data)______ä",
    		description: ""
    	},
    	service: {
    		caption: "Ĳ_ISO 19119 (Service)_______ä",
    		description: ""
    	},
    	gmi: {
    		caption: "Ĳ_ISO 19115-2 (Imagery and Gridded Data)____________ä",
    		description: ""
    	}
    },
    
    general: {
    	reference: "Ĳ_Reference____ä"
    },
    
    sections: {
    	metadata: "Ĳ_Metadata___ä",
    	identification: "Ĳ_Identification_____ä",
    	distribution: "Ĳ_Distribution_____ä",
    	quality: "Ĳ_Quality___ä",
    	acquisition: "Ĳ_Acquisition____ä"
    },
    
    metadataSection: {
    	identifier: "Ĳ_Identifier____ä",
    	contact: "Ĳ_Contact___ä",
    	date: "Ĳ_Date__ä",
    	standard: "Ĳ_Standard___ä",
    	reference: "Ĳ_Reference____ä"
    },
    
    identificationSection: {
    	citation: "Ĳ_Citation___ä",
    	description: "Ĳ_Description____ä",
    	contact: "Ĳ_Contact___ä",
    	thumbnail: "Ĳ_Thumbnail____ä",
    	keywords: "Ĳ_Keywords___ä",
    	constraints: "Ĳ_Constraints____ä",
    	resource: "Ĳ_Resource___ä",
    	resourceTab: {
    		representation: "Ĳ_Representation_____ä",
    		language: "Ĳ_Language___ä",
    		classification: "Ĳ_Classification_____ä",
    		extent: "Ĳ_Extent___ä"
    	},
    	serviceResourceTab: {
    		serviceType: "Ĳ_Service Type_____ä",
    		extent: "Ĳ_Extent___ä",
    		couplingType: "Ĳ_Coupling Type_____ä",
    		operation: "Ĳ_Operation____ä",
    		operatesOn: "Ĳ_Operates On____ä"
    	}
    },
    
    distributionSection: {
    },
    
    qualitySection: {
    	scope: "Ĳ_Scope___ä",
    	conformance: "Ĳ_Conformance____ä",
    	lineage: "Ĳ_Lineage___ä"
    },
    
    acquisitionSection: {
    	requirement: "Ĳ_Requirement____ä",
    	objective: "Ĳ_Objective____ä",
    	instrument: "Ĳ_Instrument____ä",
    	plan: "Ĳ_Plan__ä",
    	operation: "Ĳ_Operation____ä",
    	platform: "Ĳ_Platform___ä",
    	environment: "Ĳ_Environment____ä"
    },
    
    AbstractMD_Identification: {
    	sAbstract: "Ĳ_Abstract___ä",
    	purpose: "Ĳ_Purpose___ä",
    	credit: "Ĳ_Credits___ä",
    	pointOfContact: "Ĳ_Point of Contact______ä",
    	resourceMaintenance: "Ĳ_Maintenance____ä",
    	graphicOverview: "Ĳ_Graphic Overview______ä",
    	descriptiveKeywords: "Ĳ_Keyword Collection______ä",
    	resourceConstraints: "Ĳ_Constraints____ä"
    },
    
    CI_Address: {
    	deliveryPoint: "Ĳ_Delivery Point_____ä",
    	city: "Ĳ_City__ä",
    	administrativeArea: "Ĳ_Administrative Area_______ä",
    	postalCode: "Ĳ_Postal Code____ä",
    	country: "Ĳ_Country___ä",
    	electronicMailAddress: "Ĳ_E-Mail Address_____ä"
    },
    
    CI_Citation: {
    	title: "Ĳ_Title___ä",
    	alternateTitle: "Ĳ_Alternate Title______ä",
    	identifier: "Ĳ_Unique Resource Identifier_________ä",
    	resource: {
    		title: "Ĳ_Resource Title_____ä",
    		date: "Ĳ_Resource Date_____ä"
    	},
    	specification: {
    		title: "Ĳ_Specification Title_______ä",
    		date: "Ĳ_Specification Date______ä"
    	}
    },
    
    CI_Contact: {
    	phone: "Ĳ_Phone___ä",
    	address: "Ĳ_Address___ä",
    	onlineResource: "Ĳ_Online Resource______ä",
    	hoursOfService: "Ĳ_Hours of Service______ä",
    	contactInstructions: "Ĳ_Contact Instructions_______ä"
    },
    
    CI_Date: {
    	date: "Ĳ_Date__ä",
    	dateType: "Ĳ_Date Type____ä"
    },
    
  	CI_DateTypeCode: {
  		caption: "Ĳ_Date Type____ä",
  		creation: "Ĳ_Creation Date_____ä",
  		publication: "Ĳ_Publication Date______ä",
  		revision: "Ĳ_Revision Date_____ä"
  	},
  	
    CI_OnLineFunctionCode: {
    	caption: "Ĳ_Function___ä",
    	download: "Ĳ_Download___ä",
    	information: "Ĳ_Information____ä",
    	offlineAccess: "Ĳ_Offline Access_____ä",
    	order: "Ĳ_Order___ä",
    	search: "Ĳ_Search___ä"
    },
    
    CI_OnlineResource: {
    	caption: "Ĳ_Online Resource______ä",
    	linkage: "Ĳ_URL__ä",
    	protocol: "Ĳ_Protocol___ä",
    	applicationProfile: "Ĳ_Application Profile_______ä",
    	name: "Ĳ_Name__ä",
    	description: "Ĳ_Description____ä",
    	sFunction: "Ĳ_Function___ä"
    },
    
    CI_ResponsibleParty: {
    	caption: "Ĳ_Point of Contact______ä",
    	individualName: "Ĳ_Individual Name______ä",
    	organisationName: "Ĳ_Organisation Name______ä",
    	positionName: "Ĳ_Position Name_____ä",
    	contactInfo: "Ĳ_Contact Info_____ä",
    	role: "Ĳ_Role__ä"
    },
    
    CI_RoleCode: {
    	caption: "Ĳ_Role__ä",
    	resourceProvider: "Ĳ_Resource Provider______ä",
    	custodian: "Ĳ_Custodian____ä",
    	owner: "Ĳ_Owner___ä",
    	user: "Ĳ_User__ä",
    	distributor: "Ĳ_Distributor____ä",
    	originator: "Ĳ_Originator____ä",
    	pointOfContact: "Ĳ_Point of Contact______ä",
    	principalInvestigator: "Ĳ_Principal Investigator________ä",
    	processor: "Ĳ_Processor____ä",
    	publisher: "Ĳ_Publisher____ä",
    	author: "Ĳ_Author___ä"
    },
    
    CI_Telephone: {
    	voice: "Ĳ_Voice___ä",
    	facsimile: "Ĳ_Fax__ä"
    },
    
    DCPList: {
    	caption: "Ĳ_DCP__ä",
    	XML: "Ĳ_XML__ä",
    	CORBA: "Ĳ_CORBA___ä",
    	JAVA: "Ĳ_JAVA__ä",
    	COM: "Ĳ_COM__ä",
    	SQL: "Ĳ_SQL__ä",
    	WebServices: "Ĳ_WebServices____ä"
    },
    
    DQ_ConformanceResult: {
    	caption: "Ĳ_Conformance Result______ä",
    	explanation: "Ĳ_Explanation____ä",
    	degree: {
    		caption: "Ĳ_Degree___ä",
    		validationPerformed: "Ĳ_Validation Performed_______ä",
    		conformant: "Ĳ_Conformant____ä",
    		nonConformant: "Ĳ_Non Conformant_____ä"
    	}
    },
    
    DQ_DataQuality: {
    	report: "Ĳ_Report___ä"
    },
    
    DQ_Scope : {
    	level: "Ĳ_Scope (quality information applies to)____________ä",
    	levelDescription: "Ĳ_Level Description______ä"
    },
    
    EX_Extent: {
    	caption: "Ĳ_Extent___ä",
    	description: "Ĳ_Description____ä",
    	geographicElement: "Ĳ_Spatial Extent_____ä",
    	temporalElement: "Ĳ_Temporal Extent______ä",
    	verticalElement: "Ĳ_Vertical Extent______ä"
    },
    
    EX_GeographicBoundingBox: {
    	westBoundLongitude: "Ĳ_West Bounding Longitude________ä",
    	eastBoundLongitude: "Ĳ_East Bounding Longitude________ä",
    	southBoundLatitude: "Ĳ_South Bounding Latitude________ä",
    	northBoundLatitude: "Ĳ_North Bounding Latitude________ä"
    },
    
    EX_GeographicDescription: {
    	caption: "Ĳ_Geographic Description________ä"
    },
    
    EX_TemporalExtent: {
    	TimePeriod: {
    		beginPosition: "Ĳ_Begin Date____ä",
    		endPosition: "Ĳ_End Date___ä"
    	}
    },
    
    EX_VerticalExtent: {
    	minimumValue: "Ĳ_Minimum Value_____ä",
    	maximumValue: "Ĳ_Maximum Value_____ä",
    	verticalCRS: "Ĳ_Vertical CRS_____ä"
    },
    
    Length: {
    	caption: "Ĳ_Length___ä",
    	uom: "Ĳ_Units of Measure______ä",
    	km: "Ĳ_Kilometers____ä",
    	m: "Ĳ_Meters___ä",
    	mi: "Ĳ_Miles___ä",
    	ft: "Ĳ_Feet__ä"
    },
    
    LI_Lineage: {
    	statement: "Ĳ_Lineage Statement______ä"
    },
    
    MD_BrowseGraphic: {
    	fileName: "Ĳ_Browse Graphic URL______ä",
    	fileDescription: "Ĳ_Browse Graphic Caption________ä",
    	fileType: "Ĳ_Browse Graphic Type_______ä"
    },
    
    MD_ClassificationCode: {
    	unclassified: "Ĳ_Unclassified_____ä",
    	restricted: "Ĳ_Restricted____ä",
    	confidential: "Ĳ_Confidential_____ä",
    	secret: "Ĳ_Secret___ä",
    	topSecret: "Ĳ_Top Secret____ä"
    },
    
    MD_Constraints: {
    	caption: "Ĳ_Usage Constraints______ä",
    	useLimitation: "Ĳ_Use Limitation_____ä"
    },
    
    MD_DataIdentification: {
    	spatialRepresentationType: "Ĳ_Spatial Representation Type_________ä",
    	spatialResolution: "Ĳ_Spatial Resolution______ä",
    	language: "Ĳ_Resource Language______ä",
    	supplementalInformation: "Ĳ_Supplemental_____ä"
    },
    
    MD_DigitalTransferOptions: {
    	onLine: "Ĳ_Online___ä"
    },
    
    MD_Distribution: {
    	distributionFormat: "Ĳ_Distribution Format_______ä",
    	transferOptions: "Ĳ_Transfer Options______ä"
    },
    
    MD_Format: {
    	name: "Ĳ_Format Name____ä",
    	version: "Ĳ_Format Version_____ä"
    },
    
    MD_Identifier: {
    	caption: "Ĳ_URI__ä",
    	identifierCaption: "Ĳ_Identifier____ä",
    	code: "Ĳ_Code__ä"
    },
    
    MD_Keywords: {
    	delimitedCaption: "Ĳ_Keywords___ä",
    	thesaurusName: "Ĳ_Associated Thesaurus_______ä"
    },
    
    MD_KeywordTypeCode: {
    	caption: "Ĳ_Keyword Type_____ä",
    	discipline: "Ĳ_Discipline____ä",
    	place: "Ĳ_Place___ä",
    	stratum: "Ĳ_Stratum___ä",
    	temporal: "Ĳ_Temporal___ä",
    	theme: "Ĳ_Theme___ä"
    },
    
    MD_LegalConstraints: {
    	caption: "Ĳ_Legal Constraints______ä",
    	accessConstraints: "Ĳ_Access Constraints______ä",
    	useConstraints: "Ĳ_Use Constraints______ä",
    	otherConstraints: "Ĳ_Other Constraints______ä"
    },
    
    MD_MaintenanceFrequencyCode: {
    	caption: "Ĳ_Frequency____ä",
    	continual: "Ĳ_Continual____ä",
    	daily: "Ĳ_Daily___ä",
    	weekly: "Ĳ_Weekly___ä",
    	fortnightly: "Ĳ_Fortnightly____ä",
    	monthly: "Ĳ_Monthly___ä",
    	quarterly: "Ĳ_Quarterly____ä",
    	biannually: "Ĳ_Biannually____ä",
    	annually: "Ĳ_Annually___ä",
    	asNeeded: "Ĳ_As Needed____ä",
    	irregular: "Ĳ_Irregular____ä",
    	notPlanned: "Ĳ_Not Planned____ä",
    	unknown: "Ĳ_Unknown___ä"
    },
    
    MD_Metadata: {
    	caption: "Ĳ_Metadata___ä",
    	fileIdentifier: "Ĳ_File Identifier______ä",
    	language: "Ĳ_Metadata Language______ä",
    	hierarchyLevel: "Ĳ_Hierarchy Level______ä",
    	hierarchyLevelName: "Ĳ_Hierarchy Level Name_______ä",
    	contact: "Ĳ_Metadata Contact______ä",
    	dateStamp: "Ĳ_Metadata Date_____ä",
    	metadataStandardName: "Ĳ_Metadata Standard Name________ä",
    	metadataStandardVersion: "Ĳ_Metadata Standard Version_________ä",
    	referenceSystemInfo: "Ĳ_Reference System______ä",
    	identificationInfo: "Ĳ_Identification_____ä",
    	distributionInfo: "Ĳ_Distribution_____ä",
    	dataQualityInfo: "Ĳ_Quality___ä"
    },
    
    MD_ProgressCode: {
    	caption: "Ĳ_Progress Code_____ä",
    	completed: "Ĳ_Completed____ä",
    	historicalArchive: "Ĳ_Historical Archive______ä",
    	obsolete: "Ĳ_Obsolete___ä",
    	onGoing: "Ĳ_On Going___ä",
    	planned: "Ĳ_Planned___ä",
    	required: "Ĳ_Required___ä",
    	underDevelopment: "Ĳ_Under Development______ä"
    },
    
    MD_RepresentativeFraction: {
    	denominator: "Ĳ_Denominator____ä"
    },
    
    MD_Resolution: {
    	equivalentScale: "Ĳ_Equivalent Scale______ä",
    	distance: "Ĳ_Distance___ä"
    },
    
    MD_RestrictionCode: {
    	copyright: "Ĳ_Copyright____ä",
    	patent: "Ĳ_Patent___ä",
    	patentPending: "Ĳ_Patent Pending_____ä",
    	trademark: "Ĳ_Trademark____ä",
    	license: "Ĳ_License___ä",
    	intellectualPropertyRights: "Ĳ_Intellectual Property Rights_________ä",
    	restricted: "Ĳ_Restricted____ä",
    	otherRestrictions: "Ĳ_Other Restrictions______ä"
    },
    
    MD_ScopeCode: {
    	attribute: "Ĳ_Attribute____ä",
    	attributeType: "Ĳ_Attribute type_____ä",
    	collectionHardware: "Ĳ_Collection hardware_______ä",
    	collectionSession: "Ĳ_Collection session______ä",
    	dataset: "Ĳ_Dataset___ä",
    	series: "Ĳ_Series___ä",
    	nonGeographicDataset: "Ĳ_Non geographic dataset________ä",
    	dimensionGroup: "Ĳ_Dimension group______ä",
    	feature: "Ĳ_Feature___ä",
    	featureType: "Ĳ_Feature type_____ä",
    	propertyType: "Ĳ_Property type_____ä",
    	fieldSession: "Ĳ_Field session_____ä",
    	software: "Ĳ_Software___ä",
    	service: "Ĳ_Service___ä",
    	model: "Ĳ_Model___ä",
    	tile: "Ĳ_Tile__ä"
    },
    
    MD_ScopeDescription: {
    	attributes: "Ĳ_Attributes____ä",
    	features: "Ĳ_Features___ä",
    	featureInstances: "Ĳ_Feature Instances______ä",
    	attributeInstances: "Ĳ_Attribute Instances_______ä",
    	dataset: "Ĳ_Dataset___ä",
    	other: "Ĳ_Other___ä"
    },
    
    MD_SecurityConstraints: {
    	caption: "Ĳ_Security Constraints_______ä",
    	classification: "Ĳ_Classification_____ä",
    	userNote: "Ĳ_User Note____ä",
    	classificationSystem: "Ĳ_Classification System_______ä",
    	handlingDescription: "Ĳ_Handling Description_______ä"
    },
    
    MD_SpatialRepresentationTypeCode: {
    	caption: "Ĳ_Spatial Representation Type_________ä",
    	vector: "Ĳ_Vector___ä",
    	grid: "Ĳ_Grid__ä",
    	textTable: "Ĳ_Text Table____ä",
    	tin: "Ĳ_TIN__ä",
    	stereoModel: "Ĳ_Stereo Model_____ä",
    	video: "Ĳ_Video___ä"
    },
    
    MD_TopicCategoryCode: {
    	caption: "Ĳ_Topic Category_____ä",
    	boundaries: "Ĳ_Administrative and Political Boundaries_____________ä",
    	farming: "Ĳ_Agriculture and Farming________ä",
    	climatologyMeteorologyAtmosphere: "Ĳ_Atmosphere and Climatic________ä",
    	biota: "Ĳ_Biology and Ecology_______ä",
    	economy: "Ĳ_Business and Economic_______ä",
    	planningCadastre: "Ĳ_Cadastral____ä",
    	society: "Ĳ_Cultural, Society and Demography___________ä",
    	elevation: "Ĳ_Elevation and Derived Products__________ä",
    	environment: "Ĳ_Environment and Conservation_________ä",
    	structure: "Ĳ_Facilities and Structures_________ä",
    	geoscientificInformation: "Ĳ_Geological and Geophysical_________ä",
    	health: "Ĳ_Human Health and Disease________ä",
    	imageryBaseMapsEarthCover: "Ĳ_Imagery and Base Maps_______ä",
    	inlandWaters: "Ĳ_Inland Water Resources________ä",
    	location: "Ĳ_Locations and Geodetic Networks__________ä",
    	intelligenceMilitary: "Ĳ_Military___ä",
    	oceans: "Ĳ_Oceans and Estuaries_______ä",
    	transportation: "Ĳ_Transportation Networks________ä",
    	utilitiesCommunication: "Ĳ_Utilities and Communication_________ä"
    },
    
    MI_ContextCode: {
    	caption: "Ĳ_Context___ä",
    	acquisition: "Ĳ_Acquisition____ä",
    	pass: "Ĳ_Pass__ä",
    	wayPoint: "Ĳ_Waypoint___ä"
    },
    
    MI_EnvironmentalRecord: {
    	caption: "Ĳ_Environmental Conditions________ä",
    	averageAirTemperature: "Ĳ_Average Air Temperature________ä",
    	maxRelativeHumidity: "Ĳ_Maximum Relative Humidity_________ä",
    	maxAltitude: "Ĳ_Maximum Altitude______ä",
    	meterologicalConditions: "Ĳ_Meterological Conditions________ä"
    },
    
    MI_Event: {
    	identifier: "Ĳ_Event Identifier______ä",
    	time: "Ĳ_Time__ä",
    	expectedObjectiveReference: "Ĳ_Expected Objective (Objective Identifer)_____________ä",
    	relatedSensorReference: "Ĳ_Related Sensor (Instrument Identifer)____________ä",
    	relatedPassReference: "Ĳ_Related Pass (Platform Pass Identifer)____________ä"
    },

    MI_GeometryTypeCode: {
    	point: "Ĳ_Point___ä",
    	linear: "Ĳ_Linear___ä",
    	areal: "Ĳ_Areal___ä",
    	strip: "Ĳ_Strip___ä"
    },
    
    MI_Instrument: {
    	citation: "Ĳ_Instrument Citation_______ä",
    	identifier: "Ĳ_Instrument Identifier_______ä",
    	sType: "Ĳ_Instrument Type______ä",
    	description: "Ĳ_Instrument Description________ä",
    	mountedOn: "Ĳ_Mounted On____ä",
    	mountedOnPlatformReference: "Ĳ_Mounted On (Platform Identifier)___________ä"
    },
    
    MI_Metadata: {
    	acquisitionInformation: "Ĳ_Acquisition____ä"
    },
    
    MI_Objective: {
    	caption: "Ĳ_Objective____ä",
    	identifier: "Ĳ_Objective Identifier_______ä",
    	priority: "Ĳ_Priority of Target______ä",
    	sFunction: "Ĳ_Function of Objective_______ä",
    	extent: "Ĳ_Extent___ä",
    	pass: "Ĳ_Platform Pass_____ä",
    	sensingInstrumentReference: "Ĳ_Sensing Instrument (Instrument Identifier)______________ä",
    	objectiveOccurrence: "Ĳ_Events___ä",
    	sections: {
    		identification: "Ĳ_Identification_____ä",
    		extent: "Ĳ_Extent___ä",
    		pass: "Ĳ_Pass__ä",
    		sensingInstrument: "Ĳ_Sensing Instrument______ä",
    		objectiveOccurrence: "Ĳ_Events___ä"
    	}
    },
    
    MI_ObjectiveTypeCode: {
    	caption: "Ĳ_Type (Collection Technique for Objective)_____________ä",
    	instantaneousCollection: "Ĳ_Instantaneous Collection________ä",
    	persistentView: "Ĳ_Persistent View______ä",
    	survey: "Ĳ_Survey___ä"
    },
    
    MI_Operation: {
    	caption: "Ĳ_Operation____ä",
    	description: "Ĳ_Operation Description_______ä",
    	citation: "Ĳ_Operation Citation______ä",
    	identifier: "Ĳ_Operation Identifier_______ä",
    	status: "Ĳ_Operation Status______ä",
    	objectiveReference: "Ĳ_Related Objective (Objective Identifier)_____________ä",
    	planReference: "Ĳ_Related Plan (Plan Identifier)__________ä",
    	significantEventReference: "Ĳ_Related Event (Event Identifier)___________ä",
    	platformReference: "Ĳ_Related Platform (Platform Identifier)____________ä",
    	sections: {
    		identification: "Ĳ_Identification_____ä",
    		related: "Ĳ_Related___ä"
    	}
    },
    
    MI_OperationTypeCode: {
    	caption: "Ĳ_Operation Type_____ä",
    	real: "Ĳ_Real__ä",
    	simulated: "Ĳ_Simulated____ä",
    	synthesized: "Ĳ_Synthesized____ä"
    },
    
    MI_Plan: {
    	sType: "Ĳ_Sampling Geometry for Collecting Data____________ä",
    	status: "Ĳ_Status of Plan_____ä",
    	citation: "Ĳ_Citation of Authority Requesting Collection______________ä",
    	satisfiedRequirementReference: "Ĳ_Satisfied Requirement (Requirement Identifier)_______________ä",
    	operationReference: "Ĳ_Related Operation (Operation Identifier)_____________ä"
    },
    
    MI_Platform: {
    	citation: "Ĳ_Platform Citation______ä",
    	identifier: "Ĳ_Platform Identifier_______ä",
    	description: "Ĳ_Description of Platform Supporting the Instrument________________ä",
    	sponsor: "Ĳ_Sponsor Organization for Platform___________ä",
    	instrument: "Ĳ_Instrument(s) mounted on the platform____________ä",
    	instrumentReference: "Ĳ_Instrument Identifier_______ä",
    	sections: {
    		identification: "Ĳ_Identification_____ä",
    		sponsor: "Ĳ_Sponsor___ä",
    		instruments: "Ĳ_Instruments____ä"
    	}
    },
    
    MI_PlatformPass: {
    	identifier: "Ĳ_Platform Pass Identifier________ä",
    	extent: "Ĳ_Platform Pass Extent_______ä",
    	relatedEventReference: "Ĳ_Related Event (Event Identifer)__________ä"
    },

    MI_PriorityCode: {
    	critical: "Ĳ_Critical___ä", 
    	highImportance: "Ĳ_High Importance______ä",
    	mediumImportance: "Ĳ_Medium Importance______ä",
    	lowImportance: "Ĳ_Low Importance_____ä"
    },
    
    MI_RequestedDate : {
    	requestedDateOfCollection: "Ĳ_Requested Date Of Collection_________ä",
    	latestAcceptableDate: "Ĳ_Latest Acceptable Date________ä"
    },
    
    MI_Requirement: {
    	caption: "Ĳ_Requirement____ä",
    	citation: "Ĳ_Citation for Requirement Guidance Material______________ä",
    	identifier: "Ĳ_Requirement Identifier________ä",
    	requestor: "Ĳ_Requestor of Requirement________ä",
    	recipient: "Ĳ_Recipient of Requirement Results___________ä",
    	priority: "Ĳ_Requirement Priority_______ä",
    	requestedDate: "Ĳ_Requested Date_____ä",
    	expiryDate: "Ĳ_Expiry Date____ä",
    	satisifiedPlanReference: "Ĳ_Satisfied Plan (Plan Identifier)___________ä",
    	sections: {
    		identification: "Ĳ_Identification_____ä",
    		requestor: "Ĳ_Requestor____ä",
    		recipient: "Ĳ_Recipient____ä",
    		priorityAndDates: "Ĳ_Priority And Dates______ä",
    		satisifiedPlan: "Ĳ_Satisified  Plan______ä"
    	}
    },
    
    MI_SequenceCode: {
    	caption: "Ĳ_Sequence___ä",
    	start: "Ĳ_Start___ä",
    	end: "Ĳ_End__ä",
    	instantaneous: "Ĳ_Instantaneous_____ä"
    },
    
    MI_TriggerCode: {
    	caption: "Ĳ_Trigger___ä",
    	automatic: "Ĳ_Automatic____ä",
    	manual: "Ĳ_Manual___ä",
    	preProgrammed: "Ĳ_Preprogrammed_____ä"
    },
    
    ObjectReference: {
    	uuidref: "Ĳ_UUID Reference_____ä",
    	xlinkref: "Ĳ_URL Reference_____ä"
    },
    
    RS_Identifier: {
    	caption: "Ĳ_ID Plus Code Space______ä",
    	code: "Ĳ_Code__ä",
    	codeSpace: "Ĳ_Code Space____ä"
    },
    
    SV_CouplingType: {
    	loose: "Ĳ_Loose___ä",
    	mixed: "Ĳ_Mixed___ä",
    	tight: "Ĳ_Tight___ä"
    },
    
    SV_OperationMetadata: {
    	operationName: "Ĳ_Operation Name_____ä",
    	DCP: "Ĳ_DCP__ä",
    	connectPoint: "Ĳ_Connect Point_____ä"
    },
    
    SV_ServiceIdentification: {
    	serviceType: "Ĳ_ServiceType____ä",
    	couplingType: "Ĳ_Coupling Type_____ä",
    	containsOperations: "Ĳ_Operation Metadata______ä",
    	operatesOn: "Ĳ_Operates On____ä"
    },
    
    TM_Primitive: {
    	indeterminatePosition: "Ĳ_Indeterminate Position________ä",
    	indeterminates: {
    		before: "Ĳ_Before___ä",
       	after: "Ĳ_After___ä",
      	now: "Ĳ_Now__ä",
      	unknown: "Ĳ_Unknown___ä"
    	}
    },
    
    gemet: {
    	concept: {
    		gemetConceptKeyword: "Ĳ_GEMET Concept Keyword_______ä",
    		tool: "Ĳ_Look Up____ä...",
    		dialogTitle: "Ĳ_GEMET - Concept Keyword________ä",
    		searchLabel: "Ĳ_Search___ä:",
    		searchTip: "Ĳ_Search GEMET_____ä"
    	},
    	theme: {
    		tool: "Ĳ_Look Up____ä...",
    		dialogTitle: "Ĳ_GEMET - Inspire Data Theme_________ä"
    	},
    	ioerror: "Ĳ_There was an error communicating with the GEMET service: {url}____________________ä",
    	searching: "Ĳ_Searching GEMET______ä...",
    	noMatch: "Ĳ_No matching results were found__________ä.",
      languages: {
      	"bg": "Ĳ_Bulgarian____ä",
      	"cs": "Ĳ_Czech___ä",
      	"da": "Ĳ_Danish___ä",
      	"nl": "Ĳ_Dutch___ä",
      	"en": "Ĳ_English___ä",
      	"et": "Ĳ_Estonian___ä",
      	"fi": "Ĳ_Finnish___ä",
      	"fr": "Ĳ_French___ä",
      	"de": "Ĳ_German___ä",
      	"el": "Ĳ_Greek___ä",
      	"hu": "Ĳ_Hungarian____ä",
      	"ga": "Ĳ_Gaelic (Irish)_____ä",
      	"it": "Ĳ_Italian___ä",
      	"lv": "Ĳ_Latvian___ä",
      	"lt": "Ĳ_Lithuanian____ä",
      	"mt": "Ĳ_Maltese___ä",
      	"pl": "Ĳ_Polish___ä", 
      	"pt": "Ĳ_Portuguese____ä",
      	"ro": "Ĳ_Romanian___ä",
      	"sk": "Ĳ_Slovak___ä",
      	"sl": "Ĳ_Slovenian____ä",  	
      	"es": "Ĳ_Spanish___ä",
      	"sv": "Ĳ_Swedish___ä"
      }
    }
   
  })
);
